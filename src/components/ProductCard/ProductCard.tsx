import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';

import classes from './ProductCard.module.scss';
import { Product } from '../../types/interfaces/Product';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';

interface ProductCartProps {
  product: Product;
}

const ProductCard: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className={classes.card}>
      {product.sale.isActive && (
        <div className={classes.sale}>
          <p>{product.sale.amount}%</p>
          <p>OFF</p>
        </div>
      )}

      <div className={classes.img_wrapper}>
        <img src={product.image} alt={product.productName} />
        <button className={classes.wish}>
          {product.favorite ? <FaRegHeart className={classes.wish_img} /> : <FaHeart className={classes.wish_img} />}
        </button>
      </div>

      <div className={classes.rating_instock_wrapper}>
        <div className={classes.rating_wrapper}>
          <MdOutlineStar className={classes.rating_star} />
          <MdOutlineStar className={classes.rating_star} />
          <MdOutlineStar className={classes.rating_star} />
          <MdOutlineStar className={classes.rating_star} />
          <MdOutlineStar className={classes.rating_star} />
          <div className={classes.rating}>{product.rating}</div>
        </div>

        <p className={classes.inStock}>in stock</p>
      </div>

      <p className={classes.title}>{product.productName}</p>
      <p className={classes.description}>{product.description}</p>
      {product.salePrice && <p className={classes.salePrice}>{product.salePrice} грн.</p>}
      <p className={classes.price}>{product.price} грн.</p>

      <ButtonAddToCart />
    </div>
  );
};

export default ProductCard;
