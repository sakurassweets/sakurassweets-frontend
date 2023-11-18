import classes from './Modal.module.scss';
import modalImg from '../../assets/img/modal.png';
import cross from '../../assets/icons/crossDark.svg';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { MouseEventHandler } from 'react';

interface Modal {
  open: boolean;
  onClose: () => void;
}

const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
  e.persist();
  e.stopPropagation();
};

export const Modal: React.FC<Modal> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div onClick={stopPropagation} className={classes.modalContainer}>
        <Button className={classes.modalClose} onClick={onClose}>
          <img src={cross} alt="close modal" />
        </Button>
        <div className={classes.modalLeft}>
          <div className={classes.modalContent}>
            <h2>Вхід</h2>
            <form className={classes.modalForm}>
              <Input id={'email'} label={'Ел.пошта'} className={classes.modalInput}></Input>
              <Input id={'password'} label={'Введіть пароль'} className={classes.modalInput}></Input>
              <div className="">Забули пароль?</div>
              <Button type={'submit'}>Увійти</Button>
            </form>
            <Button className={classes.modalBtn}>Зареєструватися</Button>
          </div>
        </div>
        <img src={modalImg} className={classes.modalImg} alt="modal image" />
      </div>
    </div>
  );
};
