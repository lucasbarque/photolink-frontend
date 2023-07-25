import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

export interface VerifyAccountResponseDTO extends GeneralErrorsDTO {
  completed?: boolean;
}
