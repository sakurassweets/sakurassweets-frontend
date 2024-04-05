import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchAllProductsThunk, fetchProductByIdThunk } from '../../redux/products/operations';
import { TYPE } from '../Home/Home';
import { Product } from '../../types/interfaces/Product';
import { SliderComponent } from '../Common/index';
import { Content, Images, Tab } from './index';

import classes from './productByID.module.scss';

interface ProductDetailsProps {
  productDetails?: Product;
}

export const ProductByID: React.FC<ProductDetailsProps> = React.memo(() => {
  const dispatch = useAppDispatch();
  const reviewRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const productDetails = useAppSelector((state) => state.products.productDetails);
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id as string));
    dispatch(fetchAllProductsThunk());
  }, [dispatch, id]);

  const scrollToContent = () => {
    reviewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={classes.wrapper}>
            <Images images={productDetails.images} />
            <Content productDetails={productDetails} id={id} scrollToContent={scrollToContent} />
            <Tab product={productDetails} ref={reviewRef} />
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
