import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags } = this.props.item;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} item={this.props.item} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
