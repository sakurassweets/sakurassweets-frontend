import { LuHeart } from 'react-icons/lu';

import classes from './FavoriteBtn.module.scss';

export const FavoriteBtn = () => {
  return (
    <>
      {/* <button className={classes.favorite}>
        {product.favorite ? <LuHeart className={classes.favorite__icon} /> : <LuHeart className={classes.favorite__favIcon} />}
      </button> */}
      <button className={classes.favorite}>
        <LuHeart className={classes.favorite__icon} />
      </button>
    </>
  );
};
