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
  const [inputValue, setInputValue] = useState('');

  const onModalClose = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  // Submits search query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (inputValue.length > 0) {
      console.log(`Пошук: ${inputValue}`);
    }
    setInputValue('');
  };

  // Handles input changes
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  // Clears the input field
  const clearInput = (): void => {
    setInputValue('');
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
          <form onSubmit={handleSubmit} className={classes.inputControl}>
            <Input
              id="search"
              type="text"
              placeholder="Пошук товарів"
              controlClassName={classes.inputControl}
              className={classes.searchInput}
              value={inputValue}
              onChange={handleInputValue}
              icon={
                <button className={classes.buttonSearch} onClick={handleSubmit}>
                  <svg viewBox="0 0 32 32" className={classes.svgSearch}>
                    <use href={sprite + '#icon-search'}></use>
                  </svg>
                </button>
              }
              closeIcon={
                <button className={classes.buttonSVG} type="button" onClick={clearInput}>
                  <svg viewBox="0 0 32 32" className={classes.svgClose}>
                    <use href={sprite + '#icon-cross'}></use>
                  </svg>
                </button>
              }
            />
          </form>
          <HeaderControl openModal={toggleModal} />
        </div>
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </div>
  );
};
