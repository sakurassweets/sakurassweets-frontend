import { NavLink } from 'react-router-dom';
import location from '../../../assets/icons/location.svg';
import classes from './SubHeader.module.scss';
import classNames from 'classnames';

export const SubHeader: React.FC = () => {
  return (
    <div className={classes.subHeader}>
      <div className={classNames(classes.wrapper, 'container')}>
        <div className={classes.info}>
          <p>Welcome to Clicon online eCommerce store. </p>
          <div className={classes.location}>
            <img src={location} alt="Location icon" width={16} height={16} />
            <p>Київ</p>
          </div>
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink to="/">Про нас</NavLink>
          </li>
          <li>
            <NavLink to="/">Контакти</NavLink>
          </li>
          <li>
            <NavLink to="/">Оплата та доставка</NavLink>
          </li>
          <li>
            <NavLink to="/">Повернення товарів</NavLink>
          </li>
          <li>
            <NavLink to="/">Термін придатності</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
