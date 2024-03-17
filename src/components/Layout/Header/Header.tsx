import { useState } from 'react';
import { LuLayoutGrid } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { HeaderControl, SearchForm } from './index';
import { Logo } from '../../Common/Logo/Logo';
import { AuthModal } from '../../Authorization/AuthorizationModal';

import classes from './Header.module.scss';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = (): void => {
    setIsModalOpen(false);
  };

  const toggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.header__container} container`}>
        <Logo type="header" />
        <div className={classes.wrapper}>
          <NavLink to="/catalog" className={classes.header__catalogBtn}>
            <LuLayoutGrid />
            Каталог
          </NavLink>
          <SearchForm />
        </div>
        <HeaderControl openModal={toggleModal} />
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </header>
  );
};
