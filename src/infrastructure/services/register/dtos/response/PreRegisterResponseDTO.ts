import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

export interface PreRegisterResponseDTO extends GeneralErrorsDTO {
  name: string;
  email: string;
  type: 'PF' | 'PJ';
  id: number;
}
