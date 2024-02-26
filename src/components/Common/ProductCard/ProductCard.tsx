import { Link } from 'react-router-dom';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuHeart, LuStar } from 'react-icons/lu';

import defaultImage from '../../../assets/img/no-image.png';
import { Product } from '../../../types/interfaces/Product';
import ButtonAddToCart from '../Buttons/ButtonAddToCart';

import classes from './ProductCard.module.scss';

interface ProductCartProps {
  product: Product;
}

interface RatingStarsProps {
  rating: number;
}
//TODO Винести в окремий компонент
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

        <div className={classes.img__wrapper}>
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
            <p className={classes.rating_wrapper__rating}>({product.rating})</p>
          </div>

          {product.quantity_in_stock ? (
            <p className={classes.inStock}>В наявності</p>
          ) : (
            <p className={classes.outOfStock}>Немає в наявності</p>
          )}
        </div>

        <h4 className={classes.title}>{product.title}</h4>
        <p className={classes.description}>{product.description}</p>
        {product.price && <p className={classes.salePrice}>{product.price} грн</p>}
        <p className={classes.price}>{product.price} грн</p>

        <ButtonAddToCart />
      </Link>
    </li>
  );
};
