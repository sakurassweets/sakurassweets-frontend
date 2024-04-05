import { forwardRef, useState } from 'react';
import { ReviewItem, Title } from './index';

import classes from './reviews.module.scss';

export const Reviews = forwardRef<HTMLDivElement>((_props, ref) => {
  const [reviewToShow, setReviewToShow] = useState(3);

  const handleShowMore = () => {
    setReviewToShow((prevNum) => prevNum + 3);
    // Опційно: прокрутка може відбуватися тут, якщо вам потрібно прокрутити до елемента після додавання нових відгуків
  };

  const reviews = Array.from({ length: reviewToShow }, (_, index) => <ReviewItem key={index} />);

  return (
    <div className={classes.reviews} ref={ref}>
      <Title />
      {reviews}
      <button className={classes.reviews__btn} onClick={handleShowMore}>
        Бачити всі відгуки
      </button>
    </div>
  );
});
