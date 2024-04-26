import modalImg from '../../../../../assets/img/modal.png';
import classes from './modalImage.module.scss';

export const ModalImage = () => {
  return <img src={modalImg} className={classes.modal_image} alt="modal image" width={409} height={724} />;
};
