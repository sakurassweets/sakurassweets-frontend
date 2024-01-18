import React from 'react';
import classNames from 'classnames';
import classes from './Footer.module.scss';
import { Logo } from '../Logo/Logo';
import { FooterList } from './FooterList/FooterList';
import { LuPhone, LuMail } from 'react-icons/lu';

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
                <a href="tel:+380000000000">+ 38 (000) 000-00-00</a>
              </li>
              <li className={classes.address__items}>
                <LuMail aria-label="Електронна пошта" />
                <a href="mailto:sakurasweets.help@gmail.com" lang="en">
                  sakurasweets.help@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>
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
                  { text: 'Правила та умови', to: '/rules' },
                  { text: 'Політика конфіденційності', to: '/policy' },
                ],
              }}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
