import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuHeart, LuStar } from 'react-icons/lu';

import classes from './ProductCard.module.scss';
import { Product } from '../../../types/interfaces/Product';
import ButtonAddToCart from '../Buttons/ButtonAddToCart';
import defaultImage from '../../../assets/img/no-image.png';
import { Link } from 'react-router-dom';

interface ProductCartProps {
  product: Product;
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
    <li className={classes.card}>
      <Link to={`/product/${product.id}`} rel="prefetch">
        {product.discount && (
          <div className={classes.card__sale}>
            <p>{product.discount.replace(/\s/g, '')} ЗНИЖКА</p>
          </div>
        )}

        <div className={classes.img_wrapper}>
          {product.images.length > 0 ? (
            <img src={product.images[0].image} alt={product.title} width={254} height={180} />
          ) : (
            <img src={defaultImage} alt="default Image" width={254} height={180} />
          )}
          <button className={classes.wish}>
            {product.favorite ? <LuHeart className={classes.wish_img} /> : <LuHeart className={classes.wish_favimg} />}
          </button>
        </div>

        <div className={classes.rating_instock_wrapper}>
          <div className={classes.rating_wrapper}>
            <RatingStars rating={product.rating} />
            <div className={classes.rating}>({product.rating})</div>
          </div>

          {product.quantity_in_stock ? (
            <p className={classes.inStock}>В наявності</p>
          ) : (
            <p className={classes.outOfStock}>Немає в наявності</p>
          )}
        </div>

        <p className={classes.title}>{product.title}</p>
        <p className={classes.description}>{product.description}</p>
        {product.price && <p className={classes.salePrice}>{product.price} грн.</p>}
        <p className={classes.price}>{product.price} грн.</p>

        <ButtonAddToCart />
      </Link>
    </li>
  );
};
