import classes from './Modal.module.scss';
import cross from '../../assets/icons/crossDark.svg';
import { Button } from '../Button/Button';
import { MouseEventHandler } from 'react';

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
  if (!open) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div onClick={stopPropagation} className={classes.modalContainer}>
        <Button className={classes.modalClose} onClick={onClose}>
          <img src={cross} alt="close modal" />
        </Button>
        {children}
      </div>
    </div>
  );
};
