
import { forwardRef, useState } from 'react';
import { ReviewItem, Title } from './index';

import classes from './reviews.module.scss';

export const Reviews = forwardRef<HTMLDivElement>((_props, ref) => {
  const totalReviews = 17;
  const [reviewToShow, setReviewToShow] = useState(3);

  const handleShowMore = () => {
    setReviewToShow(totalReviews);
  };

  const reviews = Array.from({ length: Math.min(reviewToShow, totalReviews) }, (_, index) => (
    <ReviewItem key={index} />
  ));

  return (
    <div className={classes.reviews} ref={ref}>
      <Title />
      {reviews}
      {reviewToShow < totalReviews && (
        <button className={classes.reviews__btn} onClick={handleShowMore}>
          Бачити всі відгуки
        </button>
      )}
    </div>
  );
});

