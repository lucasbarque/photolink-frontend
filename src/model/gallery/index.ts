interface PhotosData {
  cover?: {
    id: string;
    filename: string;
  };
}

export interface IGallery {
  id: string;
  title: string;
  status: 'DRAFT' | 'PUBLISHED';
  slug: string;
  photos_data: PhotosData | null;
  photos_count: number;
  user_id: string;
  created_at: Date;
}
