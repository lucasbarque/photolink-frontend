import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

export interface CheckTokenExistsResponseDTO extends GeneralErrorsDTO {
  email?: string;
}
