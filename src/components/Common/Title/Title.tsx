import { ReactNode } from 'react';
import classes from './title.module.scss';
import classNames from 'classnames';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export const Title = ({ children, className }: TitleProps) => {
  return <div className={classNames(classes.title, className)}>{children}</div>;
};
