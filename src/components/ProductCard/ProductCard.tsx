import React from 'react';
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
import { Product } from '../../types/interfaces/Product';

const styles = classNames(classes.container);

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  function handleFavoriteClick(): void {
    product.favorite = !product.favorite;
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
