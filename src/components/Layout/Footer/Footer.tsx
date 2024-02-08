import React from 'react';
import classNames from 'classnames';
import classes from './Footer.module.scss';
import { Logo } from '../../Common/Logo/Logo';
import { FooterList } from './FooterList/FooterList';
import { LuPhone, LuMail } from 'react-icons/lu';
import { SocialNetworks } from './SocialNetworks/SocialNetworks';
import { EMAIL, PHONE_NUMBER } from '../../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className={classNames(classes.footer)}>
      <div className={`${classes.footer__container} container`}>
        <div className={classes.footer__logowrapper}>
          <Logo type="footer" />
          <address className={classes.address}>
            <ul className={classes.address__list}>
              <li className={classes.address__items}>
                <LuPhone aria-label="Телефон" />
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              </li>
              <li className={classes.address__items}>
                <LuMail aria-label="Електронна пошта" />
                <a href={`mailto:${EMAIL}`} lang="en">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </address>
        </div>
        <SocialNetworks />
        <ul className={classNames(classes.footer__list)}>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Графік роботи',
                items: [
                  { text: 'Пн - Пт' },
                  { text: 'з 08:00 до 21:00' },
                  { text: 'Сб - Нд' },
                  { text: 'з 10:00 до 18:00' },
                ],
              }}
            />
          </li>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Мій аккаунт',
                items: [
                  { text: 'Мій аккаунт', to: '/account' },
                  { text: 'Історія замовлень', to: '/history' },
                  { text: 'Кошик', to: '/cart' },
                  { text: 'Обране', to: '/favorites' },
                ],
              }}
            />
          </li>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Інформація',
                items: [
                  { text: 'Про нас', to: '/about-us' },
                  { text: 'Доставка ', to: '/delivery' },
                  { text: 'Правила та умови', to: '/docs/rules' },
                  { text: 'Політика конфіденційності', to: '/docs/policy' },
                ],
              }}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
