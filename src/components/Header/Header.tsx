import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { HeaderControl } from './HeaderControl/HeaderControl';
import { AuthModal } from '../Modal/AuthModal/AuthModal';
import { LuLayoutGrid } from 'react-icons/lu';
import classes from './Header.module.scss';
import { SearchForm } from './SearchForm/SearchForm';

export const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onModalClose = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.header__container} container`}>
        <Logo />
        <NavLink to="/catalog" className={classes.header__catalogBtn}>
          <LuLayoutGrid />
          Каталог
        </NavLink>

        <SearchForm />

        <HeaderControl openModal={toggleModal} />
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </header>
  );
};
