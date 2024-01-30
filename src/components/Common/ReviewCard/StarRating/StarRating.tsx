import React from 'react';
import classNames from 'classnames';
import classes from './StarRating.module.scss';
import { StarImg } from './StarImg/StarImg';

interface Props {
  rating: number;
}

export const StarRating: React.FC<Props> = ({ rating }) => {
  const stars: Array<number> = [];

  for (let index = 0; index < rating; index++) {
    stars.push(rating - index > 1 ? 1 : rating - index);
  }

  return (
    <div className={classNames(classes.container)}>
      {stars.map((star, index) => (
        <StarImg rating={star} key={`${index}${Date.now()}`} />
      ))}
    </div>
  );
};
