import React from 'react';
import classNames from 'classnames';
import { StarImg } from './starImg/StarImg';

import classes from './StarRating.module.scss';

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
