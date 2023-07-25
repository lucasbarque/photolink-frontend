import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

export interface SetPasswordResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
