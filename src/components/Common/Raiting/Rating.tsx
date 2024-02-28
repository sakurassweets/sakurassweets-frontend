import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuStar } from 'react-icons/lu';
import { Product } from '../../../types/interfaces/Product';

import classes from './Rating.module.scss';

interface RatingProps {
  product: Product;
}

export const RatingStars: React.FC<RatingProps> = ({ product }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= product.rating) {
      stars.push(<LuStar key={i} className={classes.fullStar} />);
    } else if (i - 0.5 === product.rating) {
      stars.push(<FaRegStarHalfStroke key={i} className={classes.halfStar} />);
    } else {
      stars.push(<LuStar key={i} className={classes.emptyStar} />);
    }
  }

  return <div>{stars}</div>;
};

export const Rating: React.FC<RatingProps> = ({ product }) => {
  return (
    <>
      <div className={classes.wrapper}>
        <RatingStars product={product} />
        <p className={classes.wrapper__text}>({product.rating})</p>
      </div>
    </>
  );
};
