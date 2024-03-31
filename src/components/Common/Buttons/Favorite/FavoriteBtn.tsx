import { LuHeart } from 'react-icons/lu';
import classNames from 'classnames';

import classes from './favoriteBtn.module.scss';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

interface FavoriteBtnProps {
  isProductPage?: boolean;
  id: string | number;
}

export const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ isProductPage, id }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    setIsFavourite(favourites.includes(id));
  }, [id]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    if (favourites.includes(id)) {
      const filteredFavourites = favourites.filter((favId: string) => favId !== id);
      localStorage.setItem('favourites', JSON.stringify(filteredFavourites));
      setIsFavourite(false);
      toast.success('Товар видалений з обраних');
    } else {
      localStorage.setItem('favourites', JSON.stringify([...favourites, id]));
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
    <>
      <button className={buttonClass} onClick={toggleFavourite}>
        {isFavourite ? <LuHeart className={classes.favorite__addedIcon} /> : <LuHeart className={iconClass} />}
      </button>
    </>
  );
};
