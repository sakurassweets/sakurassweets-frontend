import { NavLink } from 'react-router-dom';
import classes from './Logo.module.scss';
import FooterLogo from '../../../assets/icons/logo.svg?react';
import HeaderLogo from '../../../assets/icons/logo_header.svg?react';

interface LogoProps {
  type: 'header' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ type = 'header' }) => {
  return (
    <NavLink to="/" className={classes.logo}>
      {type === 'header' ? <HeaderLogo /> : <FooterLogo />}
    </NavLink>
  );
};
