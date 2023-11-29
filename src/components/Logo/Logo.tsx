import { NavLink } from 'react-router-dom';
import classes from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <NavLink to="/" className={classes.logo}>
      <div className={classes.logoImg}></div>
      <p className={classes.shopTitle}>
        SAKURA’s
        <span className={classes.shopSumTitle}>sweets</span>
      </p>
    </NavLink>
  );
};
