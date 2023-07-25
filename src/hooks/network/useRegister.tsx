import { useState } from 'react';

import RegisterUserService from '@infrastructure/services/register';
import { RegisterRequestDTO } from '@infrastructure/services/register/dtos/request/RegisterRequestDTO';

import { useToast } from '@hooks/useToast';

import { HttpStatusCode } from '@model/http/http-client';
import { LoadingStatesEnum } from '@model/loading/states';

export const useRegister = () => {
  const [errorState, setErrorState] = useState<string | undefined>();
  const [requestState, setRequestState] = useState(LoadingStatesEnum.STAND_BY);
  const { toast } = useToast();

  const service = new RegisterUserService();

  const register = async (data: RegisterRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);
    const response = await service.register(data);

    switch (response.statusCode) {
      case HttpStatusCode.created:
        setRequestState(LoadingStatesEnum.DONE);
        return response;

      case HttpStatusCode.conflict:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message: 'Já existe um usuário com esse e-mail cadastrado',
          type: 'error',
        });
        break;

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

  return {
    errorState,
    requestState,
    setErrorState,
    register,
  };
};
