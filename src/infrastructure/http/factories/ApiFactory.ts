import { AxiosHttpClient } from '@infrastructure/http/client/axios-http-client';

import { IHttpClient } from '@model/http/http-client';

const ApiFactory = (): IHttpClient => {
  return new AxiosHttpClient();
};

export default ApiFactory;
