import React from 'react';

import classes from './SocialSVG.module.scss';
import classNames from 'classnames';

import { LuInstagram, LuFacebook } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Telegram } from './Telegram';
//Todo вставити коректні посилання
export const SocialSVG: React.FC = () => {
  return (
    <>
      <ul className={classNames(classes.social__list)}>
        <li>
          <Link to={'https://www.instagram.com/'} target="_blank" className={classNames(classes.social__link)}>
            <LuInstagram className={classNames(classes.social__svg)} />
          </Link>
        </li>
        <li>
          <Link to={'https://www.facebook.com/'} target="_blank" className={classNames(classes.social__link)}>
            <LuFacebook className={classNames(classes.social__svg)} />
          </Link>
        </li>
        <li>
          <Link to={'/'} target="_blank" className={classNames(classes.social__link)}>
            <Telegram />
          </Link>
        </li>
      </ul>
    </>
  );
};
