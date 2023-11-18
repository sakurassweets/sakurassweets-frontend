// import { NavLink } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { Logo } from '../../Logo/Logo';
import classes from './MainHeader.module.scss';
import catalogIcon from '../../../assets/icons/catalog.svg';
import { Input } from '../../Input/Input';
import searchIcon from '../../../assets/icons/search.svg';
import closeIcon from '../../../assets/icons/cross.svg';
import { HeaderControl } from '../HeaderControl/HeaderControl';

export const MainHeader: React.FC = () => {
  return (
    <div className={classes.mainHeader}>
      <div className={classes.headerBlock}>
        <Logo />
        <Button className={classes.btn}>
          <img src={catalogIcon} alt="Catalog icon" />
          <span>Каталог</span>
        </Button>
      </div>
      <div className={classes.headerBlock}>
        <Input
          id="search"
          type="text"
          placeholder="Пошук товарів"
          className={classes.searchInput}
          icon={<img src={searchIcon} alt="Search icon" />}
          closeIcon={<img src={closeIcon} alt="Close icon" />}
        />
        <HeaderControl />
      </div>
    </div>
  );
};
