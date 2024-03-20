import classes from './ItemAddedinCart.module.scss';
import Addedicon from './addedicon/addedicon.svg';
import Cross from './addedicon/cross.svg';

export const ItemAddedinCart = () => {
  return (
    <div className={classes.modul__wrapper}>
      <img src={Addedicon} alt="Addedicon" />
      <p>Товар успішно доданий</p>
      <img src={Cross} alt="Cross" />
    </div>
  );
};
