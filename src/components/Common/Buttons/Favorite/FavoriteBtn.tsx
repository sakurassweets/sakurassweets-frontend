import { LuHeart } from 'react-icons/lu';

import classes from './FavoriteBtn.module.scss';
import classNames from 'classnames';

interface FavoriteBtnProps {
  isProductPage?: boolean;
}

export const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ isProductPage }) => {
  const buttonClass = classNames({
    [classes.favorite_product]: isProductPage,
    [classes.favorite]: !isProductPage,
  });

  const iconClass = classNames(classes.favorite__icon, {
    [classes.favorite_product__icon]: isProductPage,
  });

  return (
    <>
      {/* <button className={classes.favorite}>
        {product.favorite ? <LuHeart className={classes.favorite__icon} /> : <LuHeart className={classes.favorite__favIcon} />}
      </button> */}
      <button className={buttonClass}>
        <LuHeart className={iconClass} />
      </button>
    </>
  );
};
