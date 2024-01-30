import { NavLink } from 'react-router-dom';
import classes from './Logo.module.scss';
import logo_footer from '../../../assets/icons/logo.svg';
import logo_header from '../../../assets/icons/logo_header.svg';

export const Logo: React.FC<{ type?: 'header' | 'footer' }> = ({ type = 'header' }) => {
  const logo = type === 'header' ? logo_header : logo_footer;

  return (
    <NavLink to="/" className={classes.logo}>
      <img src={logo} alt="Logo" />
    </NavLink>
  );
};
