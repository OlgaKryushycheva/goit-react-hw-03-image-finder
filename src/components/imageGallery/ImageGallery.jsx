import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/imageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} item={photo} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
