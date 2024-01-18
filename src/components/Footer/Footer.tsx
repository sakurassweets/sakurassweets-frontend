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
        <div className={classNames(classes.footer_sheduleContainer)}>
          <Logo />
          <address className={classes.address}>
            <ul>
              <li className={classes.address__items}>
                <LuPhone />
                <a href="tel:+380000000000">+ 38 (000) 000-00-00</a>
              </li>
              <li className={classes.address__items}>
                <LuMail />
                <a href="mailto:sakurasweets.help@gmail.com" lang="en">
                  sakurasweets.help@gmail.com
                </a>
              </li>
            </ul>
            {/* <p className={classNames(classes.footer_sheduleText)}>
              <span className={classNames(classes.footer_sheduleText__header)}>Пн-Пт</span> з 8:00 до 21:00
            </p>
            <p className={classNames(classes.footer_sheduleText)}>
              <span className={classNames(classes.footer_sheduleText__header)}>Сб-Нд</span> з 10:00 до 20:00
            </p> */}
          </address>
        </div>
        {/* <ul className={classNames(classes.footer_footerList)}>
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
                header: 'Допомога',
                items: [
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
                items: [{ text: 'Про нас', to: '/about-us' }],
              }}
            />
          </li>
        </ul> */}
      </div>
    </footer>
  );
};
