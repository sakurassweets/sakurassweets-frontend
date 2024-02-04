import React from 'react';
import classes from './SocialNetworks.module.scss';
import classNames from 'classnames';
import TelegramIcon from '../../../../assets/icons/telegram.svg?react';
import { LuInstagram, LuFacebook } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { FACEBOOK, INSTAGRAM, TELEGRAM } from '../../../../constants';
// import { Telegram } from './Telegram';
//Todo вставити коректні посилання
export const SocialNetworks: React.FC = () => {
  return (
    <ul className={classNames(classes.social__list)}>
      <ListItem link={INSTAGRAM}>
        <LuInstagram />
      </ListItem>
      <ListItem link={FACEBOOK}>
        <LuFacebook />
      </ListItem>
      <ListItem link={TELEGRAM}>
        <TelegramIcon />
      </ListItem>
    </ul>
  );
};

interface ListItemProps {
  link: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ link, children }) => {
  return (
    <li>
      <Link to={link} target="_blank" className={classNames(classes.social__link)}>
        {children}
      </Link>
    </li>
  );
};
