import { GeneralPaginationDTO } from '@infrastructure/services/defaults/dtos/GeneralPaginationDTO';

import { IGallery } from '@model/gallery';

export type ListGalleryResponseDTO = GeneralPaginationDTO.DTOs.Response & {
  galleries: IGallery[];
};
