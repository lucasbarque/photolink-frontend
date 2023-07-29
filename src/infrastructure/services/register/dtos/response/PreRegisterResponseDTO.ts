import { GeneralErrorsDTO } from '@infrastructure/services/general/dtos/GeneralErrorsDTO';

export interface PreRegisterResponseDTO extends GeneralErrorsDTO {
  name: string;
  email: string;
  type: 'PF' | 'PJ';
  id: number;
}
