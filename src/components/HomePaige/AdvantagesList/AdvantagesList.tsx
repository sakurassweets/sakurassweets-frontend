import React from 'react';
import classNames from 'classnames';
import classes from './AdvantagesList.module.scss';

import { AdvantageItem } from './AdvantageItem/AdvantageItem';

const advantages = [
  {
    icon: 'icons/track.svg',
    header: 'Безкоштовна доставка',
    text: 'Безкоштовна доставка по всій Україні',
  },
  {
    icon: 'icons/phone.svg',
    header: 'Підтримка 24/7',
    text: 'Передзвонимо вам протягом хвилини',
  },
  {
    icon: 'icons/bag.svg',
    header: 'Гарантія повернення ',
    text: 'Повернення товару протягом 30 днів',
  },
  {
    icon: 'icons/cash.svg',
    header: '100% безпечна оплата',
    text: 'Ми гарантуємо безпеку ваших грошей',
  },
];

export const AdvantagesList: React.FC = () => {
  return (
    <ul className={classNames(classes.advantagesList)}>
      {advantages.map((item) => (
        <li key={Math.random()}>
          <AdvantageItem advantage={item} />
        </li>
      ))}
    </ul>
  );
};
