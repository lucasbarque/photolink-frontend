import { GeneralPaginationDTO } from '@infrastructure/services/defaults/dtos/GeneralPaginationDTO';

export interface ListGalleryRequestDTO
  extends GeneralPaginationDTO.DTOs.Request {
  userId: string;
}
