import { Form, Formik } from 'formik';
import { InputFormik } from '../../../Input/FormikInput';
import { Button } from '../../../Button/Button';
import { registerFormFieldsDefault } from '../../../utils/auth';
import { AuthControlProps } from '../AuthModalContent';

import classes from '../AuthModal.module.scss';
import { validationRegister } from '../../../../schemas/auth-validator';

export const RegisterControl: React.FC<AuthControlProps> = ({ handleSubmit, ...props }) => {
  return (
    <Formik
      initialValues={registerFormFieldsDefault}
      validationSchema={validationRegister}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting }) => (
        <Form className={classes.modalForm}>
          <InputFormik label="Ел.пошта *" name="email" type="email" className={classes.modalInput} />
          <InputFormik label="Введіть пароль *" name="password" type="password" className={classes.modalInput} />
          <InputFormik
            label="Підтвердіть пароль *"
            name="confirmPassword"
            type="password"
            className={classes.modalInput}
          />
          <Button disabled={isSubmitting} type={'submit'}>
            {props.buttonTitle}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
