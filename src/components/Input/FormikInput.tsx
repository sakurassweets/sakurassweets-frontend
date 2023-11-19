import classNames from 'classnames';
import { useField } from 'formik';
import classes from './Input.module.scss';

interface InputFormikProps {
  label: string;
  name: string;
  controlClassName?: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

export const InputFormik: React.FC<InputFormikProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const containerClasses = classNames(classes.formControl);

  const inputClasses = classNames(classes.inputContainer, props.className, {
    [classes.inputError]: meta.touched && meta.error,
  });

  return (
    <div className={containerClasses}>
      <label className={classes.labelsWrapper}>{label}</label>
      <div className={inputClasses}>
        <input {...field} {...props} />
      </div>
      {meta.touched && meta.error && <div className={classes.errorMessage}>{meta.error}</div>}
    </div>
  );
};
