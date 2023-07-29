import { GeneralErrorsDTO } from '@infrastructure/services/defaults/dtos/GeneralErrorsDTO';

export interface SetPasswordResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
