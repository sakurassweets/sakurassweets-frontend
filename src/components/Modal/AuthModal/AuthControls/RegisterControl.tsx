import { Form, Formik } from 'formik';
import { InputFormik } from '../../../Input/FormikInput';
import { Button } from '../../../Button/Button';
import { registerFormFieldsDefault } from '../../../utils/auth';
import { AuthControlProps } from '../AuthModalContent';
import { PASS_MAX, INPUT_LENGTH } from '../../../../constants/index';
import classes from '../AuthModal.module.scss';
import { validationRegister } from '../../../../schemas/auth-validator';
import { LuSquare, LuChevronDownSquare } from 'react-icons/lu';
import { useState } from 'react';

export const RegisterControl: React.FC<AuthControlProps> = ({ handleSubmit, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
          <InputFormik
            label="Введіть пароль повторно *"
            name="confirmPassword"
            type="password"
            className={classes.modalInput}
            maxLength={PASS_MAX}
          />
          <label className={classes.accept}>
            {isChecked ? (
              <LuChevronDownSquare className={classes.accept__svg} />
            ) : (
              <LuSquare className={classes.accept__svg} />
            )}
            <input
              type="checkbox"
              name="accept"
              id="accept"
              className={classes.accept__input}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className={classes.accept__text}>
              Реєструючись, ви погоджуєтеся з умовами положення про обробку і захист персональних даних та угодою
              користувача.
            </p>
          </label>
          <Button disabled={isSubmitting} type={'submit'}>
            {props.buttonTitle}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
