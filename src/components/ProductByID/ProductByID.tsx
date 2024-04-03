import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchAllProductsThunk, fetchProductByIdThunk } from '../../redux/products/operations';
import { TYPE } from '../Home/Home';
import { Product } from '../../types/interfaces/Product';
import { Discount, InStock, Rating, SliderComponent } from '../Common/index';
import { Counter, Description, Images, Reviews, Tab } from './index';

import classes from './productByID.module.scss';
import { ButtonAddToCart, FavoriteBtn } from '../Common/Buttons';
import classNames from 'classnames';

interface ProductDetailsProps {
  productDetails?: Product;
}

export const ProductByID: React.FC<ProductDetailsProps> = React.memo(() => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState('description');
  const [isFixed, setIsFixed] = useState(true);
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

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeFixed = window.innerHeight + window.scrollY < document.body.clientHeight - 1027;
      setIsFixed(shouldBeFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentClass = classNames({
    [classes.content]: isFixed,
    [classes.content_absolute]: !isFixed,
  });

  return (
    <>
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
          </div>
          <div className={classes.tabs_wrapper} id="reviews" ref={reviewRef}>
            <Tab onClick={() => setActiveTab('description')} isActive={activeTab === 'description'} name="Опис" />
            <Tab onClick={() => setActiveTab('reviews')} isActive={activeTab === 'reviews'} name="Відгуки" />
          </div>
          {activeTab === 'description' && <Description product={productDetails} />}
          {activeTab === 'reviews' && <Reviews id="reviews" ref={reviewRef} />}
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
      <section className="section">
        <div className="container">
          {/* <div className={classes.box}></div> */}
          {/* <SliderComponent
            name="Рекомендуємо"
            items={products}
            marginBottom={100}
            type={TYPE.PRODUCT}
            dots={true}
            slides={4}
          /> */}
        </div>
      </section>
    </>
  );
});
