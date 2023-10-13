import Modal from 'react-modal';
import { Img, Item } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ModalWrap } from 'components/Modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { isModalOpen } = this.state;
    const { id, largeImg, webImg } = this.props;
    return (
      <Item key={id}>
        <Img src={webImg} alt="" onClick={this.openModal} />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalWrap img={largeImg} />
        </Modal>
      </Item>
    );
  }
}
