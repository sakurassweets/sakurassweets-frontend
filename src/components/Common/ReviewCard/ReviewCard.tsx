import React from 'react';
import classNames from 'classnames';
import classes from './ReviewCard.module.scss';

import { Review } from '../../../types/interfaces/Review';
import { StarRating } from './starRating/StarRating';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className={classNames(classes.container)}>
      <p className={classNames(classes.author)}>{review.authorName}</p>
      <p className={classNames(classes.date)}>{review.dateCreation}</p>
      <div className={classNames(classes.contantContainer)}>
        <div
          className={classNames(classes.imgContainer)}
          style={{ backgroundImage: `url(${review.productImg})` }}
        ></div>
        <div className={classNames(classes.contantInnerContainer)}>
          <StarRating rating={review.rating} />
          <p className={classNames(classes.productName)}>{review.productName}</p>
          <p className={classNames(classes.productText)}>{review.text}</p>
        </div>
      </div>
    </div>
  );
};
