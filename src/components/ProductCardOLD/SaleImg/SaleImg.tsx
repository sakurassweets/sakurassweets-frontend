import React from 'react';
import classNames from 'classnames';
import classes from './SaleImg.module.scss';

interface Props {
  isActive: boolean;
  amount: number;
}

export const SaleImg: React.FC<Props> = ({ isActive, amount }) => {
  return (
    <div className={classNames(classes.container)} style={{ display: isActive ? 'block' : 'none' }}>
      <p>{amount}%</p>
      <p>Off</p>
    </div>
  );
};
