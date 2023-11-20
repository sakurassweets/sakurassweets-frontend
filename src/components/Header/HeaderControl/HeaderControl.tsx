import { Button } from '../../Button/Button';
import favoriteIcon from '../../../assets/icons/favorite.svg';
import cartIcon from '../../../assets/icons/cart.svg';
import userIcon from '../../../assets/icons/user.svg';

import classes from './HeaderControl.module.scss';

interface HeaderControlProps {
  openModal: () => void;
}

export const HeaderControl: React.FC<HeaderControlProps> = ({ openModal }) => {
  return (
    <div className={classes.headerControl}>
      <div className={classes.language}>UA</div>
      <div className={classes.controlBtns}>
        <Button>
          <img src={favoriteIcon} alt="Favorite Icon" />
        </Button>
        <Button>
          <img src={cartIcon} alt="Cart Icon" />
        </Button>
        <Button onClick={openModal}>
          <img src={userIcon} alt="User Icon" />
        </Button>
      </div>
    </div>
  );
};
