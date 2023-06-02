import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';

import { Icon } from './Icon';

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
      <Masonry columns={3} spacing={1}>
        {images.map((image) => (
          <div key={image.id} className="group relative overflow-hidden ">
            <div className="absolute -bottom-20 left-0 right-0 flex h-12 items-center justify-center bg-esmerald-500 transition-all duration-300 ease-in group-hover:bottom-0">
              <Icon
                icon="trash"
                size={24}
                className="cursor-pointer text-gray-100 hover:text-gray-200"
              />
            </div>
            <img
              src={`${image.url}?w=162&auto=format`}
              srcSet={`${image.url}?w=162&auto=format&dpr=2 2x`}
              alt={image.title}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
