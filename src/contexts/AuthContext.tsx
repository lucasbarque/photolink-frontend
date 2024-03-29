import { ReactNode, createContext, useEffect, useState } from 'react';

import AuthService from '@infrastructure/services/auth';
import { AuthenticateResponseDTO } from '@infrastructure/services/auth/dtos/response/AuthenticateResponseDTO';

import { useSession } from '@hooks/network/useSession';

import { HttpStatusCode } from '@model/http/http-client';
import { LoadingStatesEnum } from '@model/loading/states';
import { LocalStorageKeys } from '@model/storage/keys';
import { IUser } from '@model/user';

export const AuthContext = createContext<IContext>({} as IContext);

export interface IAuthProvider {
  children: ReactNode;
}
export interface IContext {
  user: IUser | null;
  isAuthenticated: boolean;
  isBlocked: boolean;
  loadingState: LoadingStatesEnum;
  signOut: () => void;
  setUser: (user: IUser) => void;
  signIn: (
    email: string,
    password: string,
  ) => Promise<void | AuthenticateResponseDTO>;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const { authenticate } = useSession();
  const service = new AuthService();

  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isBlocked] = useState(false);
  const [loadingState, setLoadingState] = useState<LoadingStatesEnum>(
    LoadingStatesEnum.STAND_BY,
  );

  async function getSession() {
    const response = await service.getSession();

    if (response.statusCode === HttpStatusCode.ok) {
      setUser(response.body.user);
      setIsAuthenticated(true);
    } else {
      signOut();
    }
  }

  async function signIn(email: string, password: string) {
    const response = await authenticate({ email, password });

    if (response?.body) {
      setIsAuthenticated(true);
      localStorage.setItem(
        LocalStorageKeys.token,
        JSON.stringify(response.body.token),
      );
      await getSession();
    }
  }

  function signOut() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(LocalStorageKeys.token);
  }

  useEffect(() => {
    (async () => {
      await getSession();
    })();
    setLoadingState(LoadingStatesEnum.DONE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        setUser,
        isAuthenticated,
        isBlocked,
        loadingState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
