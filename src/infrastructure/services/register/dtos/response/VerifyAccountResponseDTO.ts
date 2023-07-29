import { GeneralErrorsDTO } from '@infrastructure/services/defaults/dtos/GeneralErrorsDTO';

export interface VerifyAccountResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
