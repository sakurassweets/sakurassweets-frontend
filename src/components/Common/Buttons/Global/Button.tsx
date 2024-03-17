import React from 'react';
import classNames from 'classnames';
import classes from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled, active, ...attrs }) => {
  const onClickAction = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick && onClick(e);
    }
  };

  const styles = classNames(classes.btn, className, { active });

  return (
    <button className={styles} disabled={disabled} onClick={onClickAction} {...attrs}>
      {children}
    </button>
  );
};
