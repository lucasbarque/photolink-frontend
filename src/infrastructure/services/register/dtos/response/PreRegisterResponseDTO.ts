import { GeneralErrorsDTO } from '@infrastructure/services/defaults/dtos/GeneralErrorsDTO';

export interface PreRegisterResponseDTO extends GeneralErrorsDTO {
  name: string;
  email: string;
  type: 'PF' | 'PJ';
  id: number;
}
