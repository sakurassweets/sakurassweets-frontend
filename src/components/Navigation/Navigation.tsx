import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.menu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </ul>
  );
};

export default Navigation;
