import classNames from 'classnames';
import { useField } from 'formik';
import classes from './Input.module.scss';
import iconShow from '../../assets/icons/eye-password-show.svg';
import iconClose from '../../assets/icons/eye-password-close.svg';
import { useState } from 'react';

interface InputFormikProps {
  label: string;
  name: string;
  controlClassName?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
}

export const InputFormik: React.FC<InputFormikProps> = ({ label, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [field, meta] = useField(props);

  const containerClasses = classNames(classes.formControl);

  const inputClasses = classNames(classes.inputContainer, props.className, {
    [classes.inputError]: meta.touched && meta.error,
  });
  const handleToggleEye = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={containerClasses}>
      <label className={classes.labelsWrapper}>{label}</label>
      <div className={inputClasses}>
        <input {...field} {...props} type={!isOpen && props.type === 'password' ? props.type : 'text'} />

        {props.type === 'password' && (
          <img src={isOpen ? iconShow : iconClose} className={classes.svg} onClick={handleToggleEye} />
        )}
      </div>
      {meta.touched && meta.error && <div className={classes.errorMessage}>{meta.error}</div>}
    </div>
  );
};
