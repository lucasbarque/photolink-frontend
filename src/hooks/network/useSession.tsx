import { useState } from 'react';

import AuthService from '@infrastructure/services/auth';
import { AuthenticateRequestDTO } from '@infrastructure/services/auth/dtos/request/AuthenticateRequestDTO';

import { useToast } from '@hooks/useToast';

import { HttpStatusCode } from '@model/http/http-client';
import { LoadingStatesEnum } from '@model/loading/states';

export const useSession = () => {
  const [errorState, setErrorState] = useState<string | undefined>();
  const [requestState, setRequestState] = useState(LoadingStatesEnum.STAND_BY);
  const { toast } = useToast();

  const service = new AuthService();

  const authenticate = async ({ email, password }: AuthenticateRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);

    const response = await service.authenticate({ email, password });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response;

      case HttpStatusCode.unauthorized:
        toast({ message: 'E-mail ou senha inválidos.', type: 'error' });
        setRequestState(LoadingStatesEnum.ERROR);
        break;

      case HttpStatusCode.badRequest:
        toast({ message: 'E-mail ou senha inválidos.', type: 'error' });
        setRequestState(LoadingStatesEnum.ERROR);
        break;

      default:
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        setRequestState(LoadingStatesEnum.ERROR);
        break;
    }
  };

  const getSession = async () => {
    setRequestState(LoadingStatesEnum.PENDING);
    const response = await service.getSession();

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        setRequestState(LoadingStatesEnum.DONE);
        return response.body;

      default:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message:
            'Ocorreu um erro com o nosso servidor. Tente novamente mais tarde.',
          type: 'error',
        });
        break;
    }
  };

  // const signOut = async () => {
  //   setRequestState(LoadingStatesEnum.PENDING);
  //   await service.signOut();
  // };

  return {
    errorState,
    requestState,
    setErrorState,
    getSession,
    // signOut,
    authenticate,
  };
};
