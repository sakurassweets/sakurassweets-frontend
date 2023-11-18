import { FormType } from '../../../enums/auth.enum';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import classes from './AuthModal.module.scss';

interface AuthModaContentProps {
  title: string;
  buttonTitle: string;
  buttonSwithTitle: string;
  img: string;
  onModalSwith: () => void;
  formType?: string;
}

export const AuthModaContent: React.FC<AuthModaContentProps> = ({
  title,
  buttonTitle,
  buttonSwithTitle,
  img,
  onModalSwith,
  ...props
}) => {
  return (
    <>
      <div className={classes.modalLeft}>
        <div className={classes.modalContent}>
          <h2>{title}</h2>
          <form className={classes.modalForm}>
            <Input id={'email'} label={'Ел.пошта'} className={classes.modalInput}></Input>
            <Input id={'password'} label={'Введіть пароль'} className={classes.modalInput}></Input>
            {props.formType !== FormType.Login && (
              <Input id={'password'} label={'Повторіть пароль'} className={classes.modalInput}></Input>
            )}
            {props.formType === FormType.Login && <div className="">Забули пароль?</div>}
            <Button type={'submit'}>{buttonTitle}</Button>
          </form>
          <div className={classes.modalBtnBlock}>
            {props.formType !== FormType.Login && <span>Вже маєте акаунт? </span>}
            <Button className={classes.modalBtn} onClick={onModalSwith}>
              {buttonSwithTitle}
            </Button>
          </div>
        </div>
      </div>
      <img src={img} className={classes.modalImg} alt="modal image" />
    </>
  );
};
