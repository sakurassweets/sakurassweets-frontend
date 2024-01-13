import { NavLink } from 'react-router-dom';
import classes from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <NavLink to="/" className={classes.logo}>
      <div className={classes.logoImg}></div>
      <p className={classes.logoTitle}>
        SAKURA’s
        <span className={classes.logoSubtitle}>sweets</span>
      </p>
    </NavLink>
  );
};
