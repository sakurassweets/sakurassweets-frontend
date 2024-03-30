import { useState } from 'react';
import { ReviewItem, Title } from './index';

import classes from './reviews.module.scss';

interface ReviewsProps {}
export const Reviews: React.FC<ReviewsProps> = () => {
  const [reviewToShow, setReviewToShow] = useState(3);

  const handleShowMore = () => {
    setReviewToShow((prevNum) => prevNum + 3);
  };

  const reviews = Array.from({ length: reviewToShow }, (_, index) => <ReviewItem key={index} />);
  return (
    <div className={classes.reviews}>
      <Title />
      {reviews}
      <button className={classes.reviews__btn} onClick={handleShowMore}>
        Бачити всі відгуки
      </button>
    </div>
  );
};
