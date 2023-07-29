import { GeneralErrorsDTO } from '@infrastructure/services/general/dtos/GeneralErrorsDTO';

export interface AuthenticateResponseDTO extends GeneralErrorsDTO {
  token: string;
}
