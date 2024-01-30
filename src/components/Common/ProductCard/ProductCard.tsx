import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuHeart, LuStar } from 'react-icons/lu';

import classes from './ProductCard.module.scss';
import { TestProduct } from '../../../types/interfaces/Product';
import ButtonAddToCart from '../Buttons/ButtonAddToCart';

interface ProductCartProps {
  product: TestProduct;
}

interface RatingStarsProps {
  rating: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<LuStar key={i} className={classes.fullStar} />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaRegStarHalfStroke key={i} className={classes.halfStar} />);
    } else {
      stars.push(<LuStar key={i} className={classes.emptyStar} />);
    }
  }

  return <div className={classes.ratingWrapper}>{stars}</div>;
};

export const ProductCard: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className={classes.card}>
      {product.sale.isActive && (
        <div className={classes.sale}>
          <p>{product.sale.amount}% ЗНИЖКА</p>
        </div>
      )}

      <div className={classes.img_wrapper}>
        <img src={product.image} alt={product.productName} />
        <button className={classes.wish}>
          {product.favorite ? <LuHeart className={classes.wish_img} /> : <LuHeart className={classes.wish_favimg} />}
        </button>
      </div>

      <div className={classes.rating_instock_wrapper}>
        <div className={classes.rating_wrapper}>
          <RatingStars rating={product.rating} />
          <div className={classes.rating}>({product.rating})</div>
        </div>

        {product.inStock ? (
          <p className={classes.inStock}>В наявності</p>
        ) : (
          <p className={classes.outOfStock}>Немає в наявності</p>
        )}
      </div>

      <p className={classes.title}>{product.productName}</p>
      <p className={classes.description}>{product.description}</p>
      {product.salePrice && <p className={classes.salePrice}>{product.salePrice} грн.</p>}
      <p className={classes.price}>{product.price} грн.</p>

      <ButtonAddToCart />
    </div>
  );
};
