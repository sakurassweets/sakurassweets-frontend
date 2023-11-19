import * as Yup from 'yup';
import { validateConfirmPassword, validateEmail, validatePassword } from './validators';

export const validationRegister = Yup.object().shape({
  email: validateEmail(),
  password: validatePassword(),
  confirmPassword: validateConfirmPassword(),
});

export const validationLogin = Yup.object().shape({
  email: validateEmail(),
  password: validatePassword(),
});
