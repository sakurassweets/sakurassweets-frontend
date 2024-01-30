import { Form, Formik } from 'formik';
import { InputFormik } from '../../Common/Inputs/FormikInput';
import { Button } from '../../Common/Buttons/Button';
import { loginFormFieldsDefault } from '../../utils/auth';
import { AuthControlProps } from '../AuthorizationModalContent';
import { PASS_MAX, INPUT_LENGTH } from '../../../constants/index';
import classes from '../AuthorizationModal.module.scss';
import { validationLogin } from '../../../schemas/auth-validator';
import { Link } from 'react-router-dom';

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
            label="Ел.пошта"
            name="email"
            type="email"
            className={classes.modalInput}
            maxLength={INPUT_LENGTH}
          />
          <InputFormik
            label="Введіть пароль"
            name="password"
            type="password"
            className={classes.modalInput}
            maxLength={PASS_MAX}
          />
          <Link to="/" className={classes.forgotPassword}>
            Забули пароль?
          </Link>
          <Button disabled={isSubmitting} type={'submit'}>
            {props.buttonTitle}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
