import React from 'react';
import classNames from 'classnames';
import classes from './ProductPrice.module.scss';
import { RealPrice } from './RealPrice/RealPrice';
import { CurrentPrice } from './CurrentPrice/CurrentPrice';

interface Props {
  price: number;
  sale: {
    isActive: boolean;
    amount: number;
  };
}

export const ProductPrice: React.FC<Props> = ({ price, sale }) => {
  return (
    <div className={classNames(classes.container)}>
      <RealPrice price={price} sale={sale} />
      <CurrentPrice price={price} sale={sale} />
    </div>
  );
};
