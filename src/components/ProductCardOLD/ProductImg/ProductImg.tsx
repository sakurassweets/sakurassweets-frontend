import React from 'react';
import classNames from 'classnames';
import classes from './ProductImg.module.scss';

interface Props {
  image: string;
  alt: string;
}

export const ProductImg: React.FC<Props> = ({ image, alt }) => {
  return <img src={image} alt={alt} className={classNames(classes.container)} />;
};
