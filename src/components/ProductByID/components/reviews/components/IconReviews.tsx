import { LuStar } from 'react-icons/lu';

import classes from '../reviews.module.scss';

export const IconReviews = () => {
  const stars = Array.from({ length: 4 }, (_, index) => <LuStar key={index} className={classes.fullStar} />);
  return (
    <>
      {stars}
      <LuStar className={classes.emptyStar} />
    </>
  );
};
