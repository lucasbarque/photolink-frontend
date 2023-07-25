import ApiFactory from '@infrastructure/http/factories/ApiFactory';
import { HttpResponse } from '@model/http/http-client';

import { RegisterRequestDTO } from './dtos/request/RegisterRequestDTO';

export default class RegisterUserService {
  private httpClient = ApiFactory();

  public async register(data: RegisterRequestDTO): Promise<HttpResponse> {
    return await this.httpClient.request({
      method: 'post',
      url: '/users',
      body: data,
    });
  }
}
