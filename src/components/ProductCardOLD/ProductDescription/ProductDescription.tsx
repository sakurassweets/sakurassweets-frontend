import React from 'react';
import classNames from 'classnames';
import classes from './ProductDescription.module.scss';

interface Props {
  productDescription: string;
}

export const ProductDescription: React.FC<Props> = ({ productDescription }) => {
  return <p className={classNames(classes.container)}>{productDescription}</p>;
};
