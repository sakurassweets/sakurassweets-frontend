import { LegacyRef, forwardRef, useState, RefAttributes, ForwardRefExoticComponent } from 'react';
import { ReviewItem, Title } from './index';

import classes from './reviews.module.scss';

interface ReviewsProps {
  id: string;
  ref: LegacyRef<HTMLDivElement> | undefined;
}
export const Reviews: ForwardRefExoticComponent<Omit<ReviewsProps, 'ref'> & RefAttributes<HTMLDivElement>> = forwardRef(
  (props, ref) => {
    const [reviewToShow, setReviewToShow] = useState(3);

    const handleShowMore = () => {
      setReviewToShow((prevNum) => prevNum + 3);
    };

    const reviews = Array.from({ length: reviewToShow }, (_, index) => <ReviewItem key={index} />);
    return (
      <div className={classes.reviews} id={props.id} ref={ref}>
        <Title />
        {reviews}
        <button className={classes.reviews__btn} onClick={handleShowMore}>
          Бачити всі відгуки
        </button>
      </div>
    );
  }
);
