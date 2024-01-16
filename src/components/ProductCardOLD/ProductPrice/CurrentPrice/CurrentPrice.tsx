import React from 'react';
import classNames from 'classnames';
import classes from './CurrentPrice.module.scss';

interface Props {
  price: number;
  sale: {
    isActive: boolean;
    amount: number;
  };
}

export const CurrentPrice: React.FC<Props> = ({ price, sale }) => {
  return (
    <p className={classNames(classes.container)}>
      {sale.isActive ? Math.floor(price * (100 - sale.amount)) / 100 : price} грн
    </p>
  );
};
