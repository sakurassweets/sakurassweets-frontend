import { Button } from '../../Button/Button';
import favoriteIcon from '../../../assets/icons/favorite.svg';
import cartIcon from '../../../assets/icons/cart.svg';
import userIcon from '../../../assets/icons/user.svg';

import classes from './HeaderControl.module.scss';

export const HeaderControl: React.FC = () => {
  return (
    <div className={classes.headerControl}>
      <div className={classes.language}>EN</div>
      <div className={classes.controlBtns}>
        <Button>
          <img src={favoriteIcon} alt="Favorite Icon" />
        </Button>
        <Button>
          <img src={cartIcon} alt="Cart Icon" />
        </Button>
        <Button>
          <img src={userIcon} alt="User Icon" />
        </Button>
      </div>
    </div>
  );
};
