import { GeneralErrorsDTO } from '@infrastructure/services/general/dtos/GeneralErrorsDTO';

import { IUser } from '@model/user';

export interface MeResponseDTO extends GeneralErrorsDTO {
  user: IUser;
}
