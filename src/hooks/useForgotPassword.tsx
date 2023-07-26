import { useState } from 'react';

import ForgotPasswordService from '@infrastructure/services/forgotPassword';
import { ChangePasswordRequestDTO } from '@infrastructure/services/forgotPassword/dtos/request/ChangePasswordRequestDTO';
import { CheckTokenExistsRequestDTO } from '@infrastructure/services/forgotPassword/dtos/request/CheckTokenExistsRequestDTO';
import { ForgotPasswordRequestDTO } from '@infrastructure/services/forgotPassword/dtos/request/ForgotPasswordRequestDTO';
import { useNavigate } from 'react-router-dom';

import { HttpStatusCode } from '@model/http/http-client';
import { LoadingStatesEnum } from '@model/loading/states';

import { useToast } from './useToast';

export const useForgotPassword = () => {
  const [errorState, setErrorState] = useState<string | undefined>();
  const [requestState, setRequestState] = useState(LoadingStatesEnum.STAND_BY);
  const { toast } = useToast();
  const navigate = useNavigate();

  const service = new ForgotPasswordService();

  const sendEmail = async (data: ForgotPasswordRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);
    const response = await service.sendEmail(data);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        setRequestState(LoadingStatesEnum.DONE);
        return response.body;
      default:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        break;
    }
  };

  const checkTokenExists = async (data: CheckTokenExistsRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);
    const response = await service.checkTokenExists(data);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        setRequestState(LoadingStatesEnum.DONE);
        return response;
      case HttpStatusCode.rule:
        setRequestState(LoadingStatesEnum.ERROR);
        return response;
      case HttpStatusCode.forbidden:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message: 'Token inválido, solicite uma nova redefinição de senha.',
          type: 'error',
        });
        return response;
      default:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        break;
    }
  };

  const changePassword = async (data: ChangePasswordRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);
    const response = await service.changePassword(data);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        setRequestState(LoadingStatesEnum.DONE);
        toast({
          message: 'Senha alterada com sucesso.',
          type: 'success',
        });
        navigate('/');
        break;
      case HttpStatusCode.rule:
        setRequestState(LoadingStatesEnum.ERROR);
        return response.body;
      default:
        setRequestState(LoadingStatesEnum.ERROR);
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        break;
    }
  };

  return {
    requestState,
    setErrorState,
    errorState,
    sendEmail,
    checkTokenExists,
    changePassword,
  };
};
