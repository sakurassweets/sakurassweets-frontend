import ReactDOM from 'react-dom';
import { MouseEventHandler, useEffect, useState } from 'react';
import { LuX } from 'react-icons/lu';

import classNames from 'classnames';
import classes from './Modal.module.scss';

const rootModal = document.querySelector('#modal-root');

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
  e.persist();
  e.stopPropagation();
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const [shouldRender, setShouldRender] = useState(false);

  // This class should handle showing and hiding with transition
  const overlayClasses = classNames(classes.modal__overlay, {
    [classes.modal__overlay__active]: open,
  });

  // This class should handle showing and hiding with transition
  const modalContainerClasses = classNames(classes.modal__wrapper, {
    [classes.modal__wrapper__active]: open,
  });

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      const timerId = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [open]);

  //Modal Escape close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!shouldRender) return null;

  return ReactDOM.createPortal(
    <div className={overlayClasses} onClick={onClose}>
      <div onClick={stopPropagation} className={modalContainerClasses}>
        <button className={classes.modal__wrapper__closeBtn} onClick={onClose}>
          <LuX />
        </button>
        {children}
      </div>
    </div>,
    rootModal!
  );
};
