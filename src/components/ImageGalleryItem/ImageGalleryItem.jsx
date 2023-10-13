import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, largeImg, webImg }) => {
  return (
    <Item key={id}>
      <Img src={webImg} alt="" />
    </Item>
  );
};
