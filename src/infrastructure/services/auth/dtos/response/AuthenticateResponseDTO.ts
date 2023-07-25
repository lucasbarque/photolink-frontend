import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

export interface AuthenticateResponseDTO extends GeneralErrorsDTO {
  token: string;
}
