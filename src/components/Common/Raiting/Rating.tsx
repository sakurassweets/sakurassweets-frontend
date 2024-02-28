import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuStar } from 'react-icons/lu';

import classes from './Rating.module.scss';
import { Product } from '../../../types/interfaces/Product';
import { InStock } from '../InStock/InStock';

interface RatingProps {
  product: Product;
}

//TODO Винести в окремий компонент
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

  return <div className={classes.ratingWrapper}>{stars}</div>;
};

export const Rating: React.FC<RatingProps> = ({ product }) => {
  return (
    <div>
      <div className={classes.rating_instock_wrapper}>
        <div className={classes.rating_wrapper}>
          <RatingStars product={product} />
          <p className={classes.rating_wrapper__rating}>({product.rating})</p>
        </div>
        <InStock product={product} />
      </div>
    </div>
  );
};
