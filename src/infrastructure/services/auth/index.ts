import ApiFactory from '@infrastructure/http/factories/ApiFactory';

import { HttpResponse } from '@model/http/http-client';

import { AuthenticateRequestDTO } from './dtos/request/AuthenticateRequestDTO';
import { AuthenticateResponseDTO } from './dtos/response/AuthenticateResponseDTO';
import { MeResponseDTO } from './dtos/response/MeResponseDTO';

export default class AuthService {
  httpClient = ApiFactory();

  public async authenticate(
    data: AuthenticateRequestDTO,
  ): Promise<HttpResponse<AuthenticateResponseDTO>> {
    return await this.httpClient.request({
      method: 'post',
      url: '/sessions',
      body: data,
    });
  }

  public async me(): Promise<HttpResponse<MeResponseDTO>> {
    return await this.httpClient.request({
      method: 'get',
      url: '/me',
    });
  }
}
