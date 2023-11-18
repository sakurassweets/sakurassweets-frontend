import { FormType } from '../../../enums/auth.enum';
import { Button } from '../../Button/Button';
import { FormikHelpers } from 'formik';
import { authFormValues } from '../../../models/auth';

import classes from './AuthModal.module.scss';
import { LoginControl } from './AuthControls/LoginControl';
import { RegisterControl } from './AuthControls/RegisterControl';
interface AuthModaContentProps {
  title: string;
  buttonTitle: string;
  buttonSwithTitle: string;
  img: string;
  onModalSwith: () => void;
  formType?: string;
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
  const handleSubmit = (values: authFormValues, actions: FormikHelpers<authFormValues>) => {
    console.log('Form submitted with values:', values);
    actions.resetForm();
    props.onClose();
  };

  return (
    <>
      <div className={classes.modalLeft}>
        <div className={classes.modalContent}>
          <h2>{title}</h2>
          {props.formType === FormType.Login ? (
            <LoginControl handleSubmit={handleSubmit} buttonTitle={buttonTitle} />
          ) : (
            <RegisterControl handleSubmit={handleSubmit} buttonTitle={buttonTitle} />
          )}
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
