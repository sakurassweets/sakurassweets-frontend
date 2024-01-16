import React from 'react';
import classNames from 'classnames';
import classes from './RealPrice.module.scss';

interface Props {
  price: number;
  sale: {
    isActive: boolean;
    amount: number;
  };
}

export const RealPrice: React.FC<Props> = ({ price, sale }) => {
  return (
    <p className={classNames(classes.container)} style={{ display: sale.isActive ? 'block' : 'none' }}>
      {price} грн
    </p>
  );
};
