import React from 'react';
import { Product } from '../../../types/interfaces/Product';
import classes from './Description.module.scss';

interface DescriptionProps {
  product: Product;
}
export const Description: React.FC<DescriptionProps> = ({ product }) => {
  return (
    <div className={classes.description}>
      <h2 className={classes.description__title}>Опис</h2>
      <p className={classes.description__text}>{product.description}</p>
      <ul>
        <li>
          <p className={classes.description__quantity}>
            Вага:
            <span>{product.product_quantity}</span>
          </p>
        </li>
        <li>
          <p className={classes.description__supplier}>
            Виробник:
            <span>Lotte Japan</span>
          </p>
        </li>
        <li>
          <p className={classes.description__ingredients}>
            Склад:
            <span>{product.components}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
