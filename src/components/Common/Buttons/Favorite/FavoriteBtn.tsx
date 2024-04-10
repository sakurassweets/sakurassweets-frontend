import { LuHeart } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Product } from '../../../../types/interfaces/Product';
import classNames from 'classnames';

import classes from './favoriteBtn.module.scss';

interface FavoriteBtnProps {
  isProductPage?: boolean;
  product: Product;
}

export const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ isProductPage, product }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    setIsFavourite(favourites.some((favProduct: Product) => favProduct.id === product.id));
  }, [product]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    if (favourites.some((favProduct: Product) => favProduct.id === product.id)) {
      const filteredFavourites = favourites.filter((favProduct: Product) => favProduct.id !== product.id);
      localStorage.setItem('favourites', JSON.stringify(filteredFavourites));
      setIsFavourite(false);
      toast.success('Товар видалений з обраних');
    } else {
      localStorage.setItem('favourites', JSON.stringify([...favourites, product]));
      setIsFavourite(true);
      toast.success('Товар успішно збережений');
    }
  };
  const buttonClass = classNames({
    [classes.favorite_product]: isProductPage,
    [classes.favorite]: !isProductPage,
  });

  const iconClass = classNames(classes.favorite__icon, {
    [classes.favorite_product__icon]: isProductPage,
  });

  return (
    <div className={classes.wrapper}>
      <button className={buttonClass} onClick={toggleFavourite}>
        {isFavourite ? <LuHeart className={classes.favorite__addedIcon} /> : <LuHeart className={iconClass} />}
      </button>
      {isProductPage && (
        <p className={classes.wrapper__text}>{!isFavourite ? 'Додати до обраного' : 'Прибрати з обраного'}</p>
      )}
    </div>
  );
};
