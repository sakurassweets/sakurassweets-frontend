// import { NavLink } from 'react-router-dom';
import { Logo } from '../../Logo/Logo';
import classes from './MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <div className={classes.mainHeader}>
      <Logo />
    </div>
  );
};
