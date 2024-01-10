import { NavLink } from 'react-router-dom';
import { Logo } from '../../Logo/Logo';
import { Input } from '../../Input/Input';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import { useState } from 'react';
import { AuthModal } from '../../Modal/AuthModal/AuthModal';
import sprite from '../../../assets/icons/sprite.svg';
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
            <svg viewBox="0 0 32 32" className={classes.svg}>
              <use href={sprite + '#icon-catalog'}></use>
            </svg>
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
            icon={
              <svg viewBox="0 0 32 32" className={classes.svgSearch}>
                <use href={sprite + '#icon-search'}></use>
              </svg>
            }
            closeIcon={
              <button className={classes.buttonSVG} type="button">
                <svg viewBox="0 0 32 32" className={classes.svgClose}>
                  <use href={sprite + '#icon-cross'}></use>
                </svg>
              </button>
            }
          />
          <HeaderControl openModal={toggleModal} />
        </div>
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </div>
  );
};
