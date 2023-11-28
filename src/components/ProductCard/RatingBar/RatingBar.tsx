import React from 'react';
import classNames from 'classnames';
import classes from './RatingBar.module.scss';
import { StarRating } from './StarRating/StarRating';
import { StockCheck } from './StockCheck/StockCheck';

interface Props {
  rating: number;
  inStock: boolean;
}

export const RatingBar: React.FC<Props> = ({ rating, inStock }) => {
  return (
    <div className={classNames(classes.container)}>
      <StarRating rating={rating} />
      <StockCheck inStock={inStock} />
    </div>
  );
};
