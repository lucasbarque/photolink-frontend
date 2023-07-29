import axios from 'axios';

import {
  HttpResponse,
  IHttpClient,
  IHttpRequest,
} from '@model/http/http-client';
import { LocalStorageKeys } from '@model/storage/keys';

const { VITE_BACKEND_URL } = import.meta.env;

interface CreateHeadersProps {
  token?: string | null;
  headers?: any;
}

export class AxiosHttpClient implements IHttpClient {
  private baseUrl: string | undefined;

  constructor() {
    this.baseUrl = VITE_BACKEND_URL;
  }

  private createHeaders({ token, headers }: CreateHeadersProps) {
    const tokenAuth = token ? { Authorization: `Bearer ${token}` } : null;
    return {
      'Content-Type': 'application/json',
      ...tokenAuth,
      ...(headers && headers),
    };
  }

  async request(data: IHttpRequest): Promise<HttpResponse> {
    try {
      const response = await axios.request({
        baseURL: this.baseUrl,
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: this.createHeaders({
          token: await this.getToken(),
          headers: data.headers,
        }),
        timeoutErrorMessage: 'timeout',
      });

      return {
        statusCode: response.status,
        body: response.data,
      };
    } catch (err: any) {
      return {
        statusCode: err?.response?.status,
        body: err?.response?.data,
      };
    }
  }

  private async getToken(): Promise<string | null> {
    const token = localStorage.getItem(LocalStorageKeys.token);

    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  }

  // private async saveToken(token: string): Promise<void> {
  //   localStorage.setItem(LocalStorageKeys.token, JSON.stringify(token));
  // }
}
