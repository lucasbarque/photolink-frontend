import ApiFactory from '@infrastructure/http/factories/ApiFactory';
import { HttpResponse } from '@model/http/http-client';

import { ChangePasswordRequestDTO } from './dtos/request/ChangePasswordRequestDTO';
import { CheckTokenExistsRequestDTO } from './dtos/request/CheckTokenExistsRequestDTO';
import { ForgotPasswordRequestDTO } from './dtos/request/ForgotPasswordRequestDTO';
import { ChangePasswordResponseDTO } from './dtos/response/ChangePasswordResponseDTO';
import { CheckTokenExistsResponseDTO } from './dtos/response/CheckTokenExistsResponseDTO';
import { ForgotPasswordResponseDTO } from './dtos/response/ForgotPasswordResponseDTO';

export default class ForgotPasswordService {
  private httpClient = ApiFactory();

  public async sendEmail(
    data: ForgotPasswordRequestDTO,
  ): Promise<HttpResponse<ForgotPasswordResponseDTO>> {
    return await this.httpClient.request({
      method: 'post',
      url: '/users/forgot-password',
      body: data,
    });
  }

  public async checkTokenExists({
    token,
  }: CheckTokenExistsRequestDTO): Promise<
    HttpResponse<CheckTokenExistsResponseDTO>
  > {
    return await this.httpClient.request({
      method: 'get',
      url: `/users/check-token-forgot-password/${token}`,
    });
  }

  public async changePassword(
    data: ChangePasswordRequestDTO,
  ): Promise<HttpResponse<ChangePasswordResponseDTO>> {
    return await this.httpClient.request({
      method: 'post',
      url: '/users/forgot-password-change',
      body: data,
    });
  }
}
