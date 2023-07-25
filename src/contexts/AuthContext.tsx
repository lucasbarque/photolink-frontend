import { ReactNode, createContext, useEffect, useState } from 'react';

import AuthService from '@infrastructure/services/auth';
import { AuthenticateResponseDTO } from '@infrastructure/services/auth/dtos/response/AuthenticateResponseDTO';

import { useToast } from '@hooks/useToast';

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
  const service = new AuthService();

  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBlocked] = useState(false);
  const [loadingState, setLoadingState] = useState<LoadingStatesEnum>(
    LoadingStatesEnum.STAND_BY,
  );
  const { toast } = useToast();

  async function getUser() {
    const response = await service.me();

    if (response.statusCode === HttpStatusCode.ok) {
      setUser(response.body.user);
    }
  }

  async function signIn(email: string, password: string) {
    setLoadingState(LoadingStatesEnum.PENDING);

    const login = await service.authenticate({ email, password });

    switch (login.statusCode) {
      case HttpStatusCode.ok:
        await getUser();
        setIsAuthenticated(true);
        setLoadingState(LoadingStatesEnum.DONE);
        localStorage.setItem(
          LocalStorageKeys.token,
          JSON.stringify(login.body.token),
        );
        break;
      case HttpStatusCode.unauthorized:
        toast({ message: 'E-mail ou senha inválidos.', type: 'error' });
        setLoadingState(LoadingStatesEnum.ERROR);
        break;

      case HttpStatusCode.badRequest:
        toast({ message: 'E-mail ou senha inválidos.', type: 'error' });
        setLoadingState(LoadingStatesEnum.ERROR);
        break;

      default:
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        setLoadingState(LoadingStatesEnum.ERROR);
        break;
    }
  }

  function signOut() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(LocalStorageKeys.token);
  }

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.token);

    if (token) {
      setIsAuthenticated(true);
    }

    setLoadingState(LoadingStatesEnum.DONE);
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
