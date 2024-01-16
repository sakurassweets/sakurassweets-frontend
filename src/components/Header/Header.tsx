import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { HeaderControl } from './HeaderControl/HeaderControl';
import { AuthModal } from '../Modal/AuthModal/AuthModal';
import sprite from '../../assets/icons/sprite.svg';
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
    <header>
      <div className={'container'}>
        <div>
          <Logo />
          <NavLink to="/catalog" className={classes.catalogBtn}>
            <svg viewBox="0 0 32 32" className={classes.svg}>
              <use href={sprite + '#icon-catalog'}></use>
            </svg>
            <span>Каталог</span>
          </NavLink>
        </div>
        <SearchForm />
        <div>
          <HeaderControl openModal={toggleModal} />
        </div>
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </header>
  );
};
