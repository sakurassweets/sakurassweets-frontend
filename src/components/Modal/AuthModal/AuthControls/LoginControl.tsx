import { Form, Formik } from 'formik';
import { InputFormik } from '../../../Input/FormikInput';
import { Button } from '../../../Button/Button';
import { loginFormFieldsDefault } from '../../../utils/auth';
import { validationPasswordEmail } from '../../../../schemas/login-validator';
import { AuthControlProps } from '../AuthModalContent';

import classes from '../AuthModal.module.scss';

export const LoginControl: React.FC<AuthControlProps> = ({ handleSubmit, ...props }) => {
  return (
    <Formik
      initialValues={loginFormFieldsDefault}
      validationSchema={validationPasswordEmail}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting }) => (
        <Form className={classes.modalForm}>
          <InputFormik label="Ел.пошта *" name="email" type="email" className={classes.modalInput} />
          <InputFormik label="Введіть пароль *" name="password" type="password" className={classes.modalInput} />
          <Button disabled={isSubmitting} type={'submit'}>
            {props.buttonTitle}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
