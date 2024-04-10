import { Discount, InStock, Rating } from '../../../Common';
import { ButtonAddToCart, FavoriteBtn } from '../../../Common/Buttons';
import { Counter } from '../counter/Counter';
import classes from './content.module.scss';
import { Product } from '../../../../types/interfaces/Product';

interface ProductDetailsProps {
  productDetails: Product;
  id?: string;
  scrollToContent: () => void;
}

export const Content: React.FC<ProductDetailsProps> = ({ productDetails, id, scrollToContent }) => {
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>{productDetails.title}</h1>
      <div className={classes.content_thumb}>
        <InStock product={productDetails} />
        <p className={classes.content_thumb__article}>Артикул: 243534</p>
      </div>
      <div className={classes.raiting_thumb}>
        <Rating product={productDetails} />
        <p className={classes.raiting_thumb__text} onClick={scrollToContent}>
          17 відгуків
        </p>
      </div>

      <div className={classes.balance_thumb}>
        <p>Залишилось на складі </p>
        <p>3 упаковки</p>
      </div>

      <div className={classes.price_thumb}>
        <p>{productDetails.product_quantity}</p>
        <Discount product={productDetails} isProductPage={true} />
      </div>
      <div className={classes.counter_thumb}>
        <Counter />
        <ButtonAddToCart product={productDetails} />
      </div>
      <FavoriteBtn isProductPage={true} id={id || ''} />
    </div>
  );
};