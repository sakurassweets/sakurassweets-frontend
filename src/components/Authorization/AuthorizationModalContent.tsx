import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../redux/hook';
import { loginThunk, registerThunk } from '../../redux/auth/operations';
import { authFormValues } from '../../models/auth';

import { LoginControl } from './authorizationControls/LoginControl';
import { RegisterControl } from './authorizationControls/RegisterControl';

import classes from './AuthorizationModal.module.scss';

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
    if (props.isLogin) {
      dispatch(loginThunk(values))
        .unwrap()
        .then(() => {
          toast.success(`Welcome to SAKURA’s sweets!`);
          props.onClose();
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      dispatch(registerThunk(values))
        .unwrap()
        .then(() => {
          toast.success(`Welcome to SAKURA’s sweets!`);
          props.onClose();
        })
        .catch((err) => toast.error(err));
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
            {!props.isLogin && <span>Вже маєте акаунт ? </span>}
            <button
              className={`${classes.modalBtn} ${props.isLogin ? classes.login : classes.register}`}
              onClick={onModalSwith}
            >
              {buttonSwithTitle}
            </button>
          </div>
        </div>
      </div>
      <img src={img} className={classes.modalImg} alt="modal image" />
    </>
  );
};
