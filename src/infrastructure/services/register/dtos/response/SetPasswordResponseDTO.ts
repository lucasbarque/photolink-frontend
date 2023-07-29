import { GeneralErrorsDTO } from '@infrastructure/services/general/dtos/GeneralErrorsDTO';

export interface SetPasswordResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
