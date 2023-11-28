import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import classes from './ProductCard.module.scss';
import { FavoriteBtn } from './FavoriteBtn/FavoriteBtn';
import { SaleImg } from './SaleImg/SaleImg';
import { ProductImg } from './ProductImg/ProductImg';
import { RatingBar } from './RatingBar/RatingBar';
import { ProductCardHeader } from './ProductCardHeader/ProductCardHeader';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { ProductPrice } from './ProductPrice/ProductPrice';
import { Button } from '../Button/Button';

const styles = classNames(classes.container);

//це переробити коли буде хотова схема до продукту
interface Product {
  productName: string;
  favorite: boolean;
  sale: {
    isActive: boolean;
    amount: number;
  };
  image: string;
  rating: number;
  inStock: boolean;
  description: string;
  price: number;
}

//це можно буде прибрати коли будуть готові продукти
//також треба буде видалити усі картинки продуктів
function createProduct(): Product {
  const defaultProduct: Product = {
    productName: 'Hanami Picnic',
    favorite: Boolean(randomize(2)),
    sale: {
      isActive: Boolean(randomize(2)),
      amount: randomize(100),
    },
    image: `/src/components/ProductCard/photo of the product(${randomize(13) + 1}).jpg`,
    rating: randomize(501) / 100,
    inStock: Boolean(randomize(2)),
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ',
    price: randomize(100000) / 100,
  };

  return defaultProduct;
}

//це також видалити
function randomize(max: number): number {
  return Math.floor(Math.random() * max);
}

export const ProductCard: React.FC = () => {
  //скоріш за все використання статів тут буде не потрібно
  const [product, setProduct] = useState(() => createProduct());

  function handleFavoriteClick(): void {
    setProduct((product) => ({
      ...product,
      favorite: !product.favorite,
    }));
  }

  function handleBuyClick(): void {
    console.log('Happy buy ;)');
  }

  return (
    <div className={styles}>
      <FavoriteBtn favorite={product.favorite} onClick={handleFavoriteClick} />
      <SaleImg isActive={product.sale.isActive} amount={product.sale.amount} />
      <ProductImg image={product.image} alt={product.productName} />
      <RatingBar rating={product.rating} inStock={product.inStock} />
      <ProductCardHeader productName={product.productName} />
      <ProductDescription productDescription={product.description} />
      <ProductPrice price={product.price} sale={product.sale} />
      <Button onClick={handleBuyClick} className={classNames(classes.button)} type={'button'}>
        <p className={classNames(classes.buttonText)}>Додати до кошика</p>
      </Button>
    </div>
  );
};
