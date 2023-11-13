// import location from '../../assets/icons/location.svg';
import { NavLink } from 'react-router-dom';
import logoIcon from '../../assets/icons/plumFlower.svg';
import classes from './Logo.module.scss';

export const Logo = () => {
  return (
    <NavLink to="/" className={classes.logo}>
      <img src={logoIcon} alt="Logo icon" width={27} height={26} />
      <p className={classes.shopTitle}>
        SAKURA’s
        <p className={classes.shopSumTitle}>sweets</p>
      </p>
    </NavLink>
  );
};
