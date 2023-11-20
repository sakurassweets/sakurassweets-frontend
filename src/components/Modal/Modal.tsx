import classes from './Modal.module.scss';
import cross from '../../assets/icons/crossDark.svg';
import { Button } from '../Button/Button';
import { MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Modal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
  e.persist();
  e.stopPropagation();
};

export const Modal: React.FC<Modal> = ({ open, onClose, children }) => {
  const overlayClasses = classNames(classes.overlay, {
    [classes.active]: open,
  });

  const modalContainerClasses = classNames(classes.modalContainer, {
    [classes.active]: open,
  });

  if (!open) {
    setTimeout(() => {
      return null;
    }, 30);
  }

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div onClick={stopPropagation} className={modalContainerClasses}>
        <Button className={classes.modalClose} onClick={onClose}>
          <img src={cross} alt="close modal" />
        </Button>
        {children}
      </div>
    </div>
  );
};
