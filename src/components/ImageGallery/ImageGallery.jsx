import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(({ id, largeImageURL, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            largeImg={largeImageURL}
            webImg={webformatURL}
          />
        );
      })}
    </List>
  );
};
