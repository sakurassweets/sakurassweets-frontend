import { Button } from '../../Button/Button';
import { FormikHelpers } from 'formik';
import { authFormValues } from '../../../models/auth';

import classes from './AuthModal.module.scss';
import { LoginControl } from './AuthControls/LoginControl';
import { RegisterControl } from './AuthControls/RegisterControl';
import { useAppDispatch } from '../../../redux/hook';
import { loginThunk, registerThunk } from '../../../redux/auth/operations';
interface AuthModaContentProps {
  title: string;
  buttonTitle: string;
  buttonSwithTitle: string;
  img: string;
  onModalSwith: () => void;
  isLogin?: boolean;
  onClose: () => void;
}

export interface AuthControlProps {
  handleSubmit: (values: authFormValues, actions: FormikHelpers<authFormValues>) => void;
  buttonTitle: string;
}

export const AuthModaContent: React.FC<AuthModaContentProps> = ({
  title,
  buttonTitle,
  buttonSwithTitle,
  img,
  onModalSwith,
  ...props
}) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: authFormValues, actions: FormikHelpers<authFormValues>) => {
    console.log('Form submitted with values:', values);
    if (props.isLogin) {
      dispatch(loginThunk(values))
        .unwrap()
        .then(() => {
          props.onClose();
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      dispatch(registerThunk(values))
        .unwrap()
        .then(() => {
          props.onClose();
        })
        .catch((err) => alert(err));
    }

    actions.resetForm();
  };

  return (
    <>
      <div className={classes.modalLeft}>
        <div className={classes.modalContent}>
          <h2>{title}</h2>
          {props.isLogin ? (
            <LoginControl handleSubmit={handleSubmit} buttonTitle={buttonTitle} />
          ) : (
            <RegisterControl handleSubmit={handleSubmit} buttonTitle={buttonTitle} />
          )}
          <div className={classes.modalBtnBlock}>
            {!props.isLogin && <span>Вже маєте акаунт? </span>}
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
