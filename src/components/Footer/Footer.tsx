import React from 'react';
import classNames from 'classnames';
import classes from './Footer.module.scss';

import { Logo } from '../Logo/Logo';
import { FooterList } from './FooterList/FooterList';

export const Footer: React.FC = () => {
  return (
    <footer className={classNames(classes.footer)}>
      <div className={classNames(classes.footer_container)}>
        <div className={classNames(classes.footer_sheduleContainer)}>
          <Logo />
          <div className={classNames(classes.footer_shedule)}>
            <p className={classNames(classes.footer_sheduleText)}>
              <span className={classNames(classes.footer_sheduleText__header)}>Пн-Пт</span> з 8:00 до 21:00
            </p>
            <p className={classNames(classes.footer_sheduleText)}>
              <span className={classNames(classes.footer_sheduleText__header)}>Сб-Нд</span> з 10:00 до 20:00
            </p>
          </div>
        </div>
        <ul className={classNames(classes.footer_footerList)}>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Мій аккаунт',
                items: [
                  { text: 'Мій аккаунт', to: '/account' },
                  { text: 'Історія замовлень', to: '/history' },
                  { text: 'Кошик', to: '/basket' },
                  { text: 'Бажане', to: '/favorites' },
                ],
              }}
            />
          </li>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Допомога',
                items: [
                  { text: 'Контакти', to: '/contacts' },
                  { text: 'FAQ', to: '/faq' },
                  { text: 'Правила та умови', to: '/rules' },
                  { text: 'Політика конфідеціальності', to: '/policy' },
                ],
              }}
            />
          </li>
          <li className={classNames(classes.footer_footerListItem)}>
            <FooterList
              content={{
                header: 'Proxy',
                items: [
                  { text: 'Про нас', to: '/about' },
                  { text: 'Магазин', to: '/shop' },
                  { text: 'Товари', to: '/catalog' },
                  { text: 'Порядок видстеження', to: '/stitch' },
                ],
              }}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
