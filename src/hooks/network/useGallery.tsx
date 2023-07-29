import { useState } from 'react';

import GalleryService from '@infrastructure/services/gallery';
import { CreateGalleryRequestDTO } from '@infrastructure/services/gallery/dtos/request/CreateGalleryRequestDTO';
import { ListGalleryRequestDTO } from '@infrastructure/services/gallery/dtos/request/ListGalleryRequestDTO';

import { useToast } from '@hooks/useToast';

import { HttpStatusCode } from '@model/http/http-client';
import { LoadingStatesEnum } from '@model/loading/states';

export const useGallery = () => {
  const [errorState, setErrorState] = useState<string | undefined>();
  const [requestState, setRequestState] = useState(LoadingStatesEnum.STAND_BY);
  const { toast } = useToast();

  const service = new GalleryService();

  const list = async (data: ListGalleryRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);

    const response = await service.list(data);

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;

      default:
        toast({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          type: 'error',
        });
        setRequestState(LoadingStatesEnum.ERROR);
        break;
    }
  };

  const create = async (data: CreateGalleryRequestDTO) => {
    setRequestState(LoadingStatesEnum.PENDING);

    const response = await service.create(data);

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return response;

      case HttpStatusCode.rule:
        toast({
          message:
            'Você já criou uma galeria com esse mesmo nome. Por favor, escolha outro',
          type: 'error',
        });
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

  return {
    errorState,
    requestState,
    setErrorState,
    create,
    list,
  };
};
