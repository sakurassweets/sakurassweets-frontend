import { MouseEventHandler, useEffect, useState } from 'react';
import classNames from 'classnames';
import { LuX } from 'react-icons/lu';
import classes from './Modal.module.scss';

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
  const [shouldRender, setShouldRender] = useState(false);

  const overlayClasses = classNames(classes.overlay, {
    [classes.active]: open,
  });

  const modalContainerClasses = classNames(classes.modalContainer, {
    [classes.active]: open,
  });

  useEffect(() => {
    if (open && !shouldRender) {
      setShouldRender(true);
    } else if (!open && shouldRender) {
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
  }, [open, shouldRender]);

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

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div onClick={stopPropagation} className={modalContainerClasses}>
        <button className={classes.modalClose} onClick={onClose}>
          <LuX />
        </button>
        {children}
      </div>
    </div>
  );
};
