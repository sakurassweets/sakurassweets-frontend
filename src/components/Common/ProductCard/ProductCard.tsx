import { Link } from 'react-router-dom';
import { hasDiscount } from '../Discount/helpers';
import defaultImage from '../../../assets/img/no-image.png';
import { Product } from '../../../types/interfaces/Product';
import { Rating } from '../Raiting/Rating';
import { InStock } from '../InStock/InStock';
import { FavoriteBtn } from '../Buttons/Favorite/FavoriteBtn';
import { ButtonAddToCart } from '../Buttons/AddToCart/ButtonAddToCart';
import { Discount } from '../Discount/Discount';

import classes from './productCard.module.scss';




interface ProductCartProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <li className={classes.card}>
      <Link to={`/product/${product.id}`} rel="prefetch">
        {hasDiscount(product.discount) && (
          <div className={classes.card__sale}>
            <p>{product.discount.replace(/\s/g, '')} ЗНИЖКА</p>
          </div>
        )}

        <div className={classes.card__img_wrapper}>
          {product.images.length > 0 ? (
            <img src={product.images[0].image} alt={product.title} width={254} height={180} />
          ) : (
            <img src={defaultImage} alt="default Image" width={254} height={180} />
          )}
          <FavoriteBtn />
        </div>

        <div className={classes.rating_instock_wrapper}>
          <Rating product={product} />
          <InStock product={product} />
        </div>

        <h4 className={classes.card__title}>{product.title}</h4>
        <p className={classes.card__description}>{product.description}</p>
        <Discount product={product} />
        <ButtonAddToCart />
      </Link>
    </li>
  );
};
