// import { NavLink } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { Logo } from '../../Logo/Logo';
import classes from './MainHeader.module.scss';
import catalogIcon from '../../../assets/icons/catalog.svg';
import { Input } from '../../Input/Input';
import searchIcon from '../../../assets/icons/search.svg';
import closeIcon from '../../../assets/icons/cross.svg';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import { useState } from 'react';
import { AuthModal } from '../../Modal/AuthModal/AuthModal';

export const MainHeader: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onModalClose = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
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
            controlClassName={classes.inputControl}
            className={classes.searchInput}
            icon={<img src={searchIcon} alt="Search icon" />}
            closeIcon={<img src={closeIcon} alt="Close icon" />}
          />
          <HeaderControl openModal={toggleModal} />
        </div>
      </div>
      <AuthModal onClose={onModalClose} open={isModalOpen}></AuthModal>
    </>
  );
};
