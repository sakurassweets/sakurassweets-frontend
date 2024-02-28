import { Link } from 'react-router-dom';
import { LuHeart } from 'react-icons/lu';

import defaultImage from '../../../assets/img/no-image.png';
import { Product } from '../../../types/interfaces/Product';
import ButtonAddToCart from '../Buttons/ButtonAddToCart';

import classes from './ProductCard.module.scss';
import { Rating } from '../Raiting/Rating';

interface ProductCartProps {
  product: Product;
}

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
          {/* <button className={classes.wish}>
            {product.favorite ? <LuHeart className={classes.wish_img} /> : <LuHeart className={classes.wish_favimg} />}
          </button> */}
          <button className={classes.wish}>
            <LuHeart className={classes.wish_img} />
          </button>
        </div>
        <Rating product={product} />
        <h4 className={classes.title}>{product.title}</h4>
        <p className={classes.description}>{product.description}</p>
        {product.price && <p className={classes.salePrice}>{product.price} грн</p>}
        <p className={classes.price}>{product.price} грн</p>

        <ButtonAddToCart />
      </Link>
    </li>
  );
};
