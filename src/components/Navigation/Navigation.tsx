import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </ul>
  );
};
