import { GeneralErrorsDTO } from '@infrastructure/services/defaults/dtos/GeneralErrorsDTO';

export interface AuthenticateResponseDTO extends GeneralErrorsDTO {
  token: string;
}
