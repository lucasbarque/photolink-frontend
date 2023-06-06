import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';

import { MasonryItem } from './MasonryItem';

interface Image {
  id: string;
  title: string;
  url: string;
}

interface MasonryGalleryProps {
  images: Image[];
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry columns={3} spacing={0.5}>
        {images.map((image) => (
          <MasonryItem image={image} key={image.id} />
        ))}
      </Masonry>
    </Box>
  );
}
