import { NavLink } from 'react-router-dom';
import { Logo } from '../../Logo/Logo';
import catalogIcon from '../../../assets/icons/catalog.svg';
import { Input } from '../../Input/Input';
import searchIcon from '../../../assets/icons/search.svg';
import closeIcon from '../../../assets/icons/cross.svg';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import { useState } from 'react';
import { AuthModal } from '../../Modal/AuthModal/AuthModal';

import classes from './MainHeader.module.scss';
import classNames from 'classnames';

export const MainHeader: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onModalClose = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className={classes.mainHeader_back}>
      <div className={classNames(classes.mainHeader, 'container')}>
        <div className={classes.headerBlock}>
          <Logo />
          <NavLink to="/catalog" className={classes.btn}>
            <img src={catalogIcon} alt="Catalog icon" />
            <span>Каталог</span>
          </NavLink>
        </div>
        <div className={classes.headerBlock}>
          <Input
            id="search"
            type="text"
            placeholder="Пошук товарів"
            controlClassName={classes.inputControl}
            className={classes.searchInput}
            icon={<img src={searchIcon} alt="Search icon" />}
            closeIcon={<img src={closeIcon} alt="Close icon" />}
          />
          <HeaderControl openModal={toggleModal} />
        </div>
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </div>
  );
};
