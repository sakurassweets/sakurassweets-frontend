import { Form, Formik } from 'formik';
import { InputFormik } from '../../../Input/FormikInput';
import { Button } from '../../../Button/Button';
import { loginFormFieldsDefault } from '../../../utils/auth';
import { AuthControlProps } from '../AuthModalContent';
import { PASS_MAX, INPUT_LENGTH } from '../../../../constants/index';
import classes from '../AuthModal.module.scss';
import { validationLogin } from '../../../../schemas/auth-validator';

export const LoginControl: React.FC<AuthControlProps> = ({ handleSubmit, ...props }) => {
  return (
    <Formik
      initialValues={loginFormFieldsDefault}
      validationSchema={validationLogin}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting }) => (
        <Form className={classes.modalForm}>
          <InputFormik
            label="Ел.пошта *"
            name="email"
            type="email"
            className={classes.modalInput}
            maxLength={INPUT_LENGTH}
          />
          <InputFormik
            label="Введіть пароль *"
            name="password"
            type="password"
            className={classes.modalInput}
            maxLength={PASS_MAX}
          />
          <Button disabled={isSubmitting} type={'submit'}>
            {props.buttonTitle}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
