import { GeneralErrorsDTO } from '@infrastructure/services/general/dtos/GeneralErrorsDTO';

export interface VerifyAccountResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
