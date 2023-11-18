import { ReactNode, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
  icon?: ReactNode;
  closeIcon?: ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ id, className, label, error, icon, closeIcon, ...attrs }) => {
  const styles = classNames(classes.inputContainer, className, { error });

  return (
    <>
      {label && <div className={classes.labelsWrapper}>{<label htmlFor={id}>{label}</label>}</div>}
      <div className={styles}>
        {icon && icon}
        <input name={id} id={id} {...attrs} />
        {closeIcon && closeIcon}
      </div>
      {error && <span className={classes.inputError}>{error}</span>}
    </>
  );
};
