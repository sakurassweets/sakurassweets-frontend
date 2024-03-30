import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchAllProductsThunk, fetchProductByIdThunk } from '../../redux/products/operations';
import { TYPE } from '../Home/Home';
import { Product } from '../../types/interfaces/Product';
import { Discount, InStock, Rating, SliderComponent } from '../Common/index';
import { Counter, Description, Images, Reviews, Tab } from './index';

import classes from './productByID.module.scss';
import { ButtonAddToCart, FavoriteBtn } from '../Common/Buttons';

interface ProductDetailsProps {
  productDetails?: Product;
}

export const ProductByID: React.FC<ProductDetailsProps> = React.memo(() => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState('description');

  const { id } = useParams();
  const productDetails = useAppSelector((state) => state.products.productDetails);
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id as string));
    dispatch(fetchAllProductsThunk());
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
              <ButtonAddToCart product={productDetails} />
            </div>
            <div className={classes.favorite}>
              <FavoriteBtn isProductPage={true} />
              <p className={classes.favorite__text}>Додати до обраного</p>
            </div>
          </div>
        </div>
        <div className={classes.tabs_wrapper}>
          <Tab onClick={() => setActiveTab('description')} isActive={activeTab === 'description'} name="Опис" />
          <Tab onClick={() => setActiveTab('reviews')} isActive={activeTab === 'reviews'} name="Відгуки" />
        </div>
        {activeTab === 'description' && <Description product={productDetails} />}
        {activeTab === 'reviews' && <Reviews />}

        <SliderComponent
          name="Рекомендуємо"
          items={products}
          marginBottom={100}
          type={TYPE.PRODUCT}
          dots={true}
          slides={4}
        />
      </div>
    </section>
  );
});
