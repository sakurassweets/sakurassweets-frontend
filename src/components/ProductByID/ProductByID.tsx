import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchAllProductsThunk, fetchProductByIdThunk } from '../../redux/products/operations';
import { TYPE } from '../Home/Home';
import { Product } from '../../types/interfaces/Product';

import { SliderComponent } from '../Common/index';
import { Content, Images, Tab } from './index';

import classes from './productByID.module.scss';
import { ButtonAddToCart, FavoriteBtn } from '../Common/Buttons';
// import classNames from 'classnames';

interface ProductDetailsProps {
  productDetails?: Product;
}

export const ProductByID: React.FC<ProductDetailsProps> = React.memo(() => {
  const [activeTab, setActiveTab] = useState('description');
  const reviewRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productDetails = useAppSelector((state) => state.products.productDetails);
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id as string));
    dispatch(fetchAllProductsThunk());
  }, [dispatch, id]);

  const scrollToContent = () => {
    setActiveTab('reviews');
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={classes.wrapper}>
            <Images images={productDetails.images} />
            <Content productDetails={productDetails} id={id} scrollToContent={scrollToContent} />
            <Tab product={productDetails} ref={reviewRef} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

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
    </>
  );
});
