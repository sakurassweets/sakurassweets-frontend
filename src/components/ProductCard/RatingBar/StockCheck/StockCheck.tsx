import React from 'react';
import classNames from 'classnames';
import classes from './StockCheck.module.scss';

interface Props {
  inStock: boolean;
}

export const StockCheck: React.FC<Props> = ({ inStock }) => {
  return (
    <div className={classNames(classes.container)} style={{ display: inStock ? 'block' : 'none' }}>
      in stock
    </div>
  );
};
