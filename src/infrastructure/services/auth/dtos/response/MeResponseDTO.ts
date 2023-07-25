import { GeneralErrorsDTO } from '@infrastructure/services/errors/dtos/GeneralErrorsDTO';

import { IUser } from '@model/user';

export interface MeResponseDTO extends GeneralErrorsDTO {
  user: IUser;
}
