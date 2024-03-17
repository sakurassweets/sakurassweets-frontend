import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchProductByIdThunk } from '../../redux/products/operations';
import { Product } from '../../types/interfaces/Product';
import { InStock } from '../Common/InStock/InStock';
import { ButtonAddToCart } from '../Common/Buttons/AddToCart/ButtonAddToCart';
import { FavoriteBtn } from '../Common/Buttons/Favorite/FavoriteBtn';
import { Rating } from '../Common/Raiting/Rating';
import { Discount } from '../Common/Discount/Discount';
import { Counter, Description, Images } from './index';
import classes from './productByID.module.scss';

interface ProductDetailsProps {
  productDetails?: Product;
}

export const ProductByID: React.FC<ProductDetailsProps> = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const productDetails = useAppSelector((state) => state.products.productDetails);

  console.log('productDetails', productDetails);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id as string));
  }, [dispatch, id]);

  return (
    <section className="section">
      <div className="container">
        <div className={classes.thumd}>
          <Images images={productDetails.images} />
          <div className={classes.content}>
            <h1 className={classes.title}>{productDetails.title}</h1>
            <div className={classes.content_thumb}>
              <InStock product={productDetails} />
              <p className={classes.content_thumb__article}>Артикул: 243534</p>
            </div>
            <div className={classes.raiting_thumb}>
              <Rating product={productDetails} />
              <p className={classes.raiting_thumb__text}>4 відгуки</p>
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
              <ButtonAddToCart />
            </div>
            <div className={classes.favorite}>
              <FavoriteBtn isProductPage={true} />
              <p className={classes.favorite__text}>Додати до обраного</p>
            </div>
          </div>
        </div>
        <Description product={productDetails} />
      </div>
    </section>
  );
};
