import { GeneralErrorsDTO } from '@infrastructure/services/defaults/dtos/GeneralErrorsDTO';

import { IUser } from '@model/user';

export interface MeResponseDTO extends GeneralErrorsDTO {
  user: IUser;
}
