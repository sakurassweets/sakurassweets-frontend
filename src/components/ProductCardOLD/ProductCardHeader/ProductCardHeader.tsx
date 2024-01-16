import React from 'react';
import classNames from 'classnames';
import classes from './ProductCardHeader.module.scss';

interface Props {
  productName: string;
}

export const ProductCardHeader: React.FC<Props> = ({ productName }) => {
  return <p className={classNames(classes.container)}>{productName}</p>;
};
