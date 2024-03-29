import { ReviewItem, Title } from './index';

import classes from './reviews.module.scss';

interface ReviewsProps {}
export const Reviews: React.FC<ReviewsProps> = () => {
  const reviews = Array.from({ length: 3 }, (_, index) => <ReviewItem key={index} />);
  return (
    <div className={classes.reviews}>
      <Title />
      {reviews}
      <button className={classes.reviews__btn}>Бачити всі відгуки </button>
    </div>
  );
};
