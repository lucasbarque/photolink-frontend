import ApiFactory from '@infrastructure/http/factories/ApiFactory';

import { HttpResponse } from '@model/http/http-client';

import { CreateGalleryRequestDTO } from './dtos/request/CreateGalleryRequestDTO';
import { ListGalleryRequestDTO } from './dtos/request/ListGalleryRequestDTO';
import { UploadPhotosRequestDTO } from './dtos/request/UploadPhotosRequestDTO';
import { ListGalleryResponseDTO } from './dtos/response/ListGalleryResponseDTO';

export default class GalleryService {
  private httpClient = ApiFactory();

  public async list({
    userId,
    page,
    perPage,
  }: ListGalleryRequestDTO): Promise<HttpResponse<ListGalleryResponseDTO>> {
    let url = `/galleries/${userId}?`;

    if (page) {
      url = `page=${page}`;
    }
    if (perPage) {
      url = `&perPage=${perPage}`;
    }

    return await this.httpClient.request({
      method: 'get',
      url,
    });
  }

  public async create(data: CreateGalleryRequestDTO): Promise<HttpResponse> {
    return await this.httpClient.request({
      method: 'post',
      url: '/galleries/create',
      body: data,
    });
  }

  public async uploadPhotos({
    id,
    socketId,
    photos,
  }: UploadPhotosRequestDTO): Promise<HttpResponse> {
    return await this.httpClient.request({
      method: 'post',
      url: `/galleries/upload-photos/${id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: { photos, socketId },
    });
  }
}
