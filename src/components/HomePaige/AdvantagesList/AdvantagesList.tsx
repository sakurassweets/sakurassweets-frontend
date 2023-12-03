import React from 'react';
import classNames from 'classnames';
import classes from './AdvantagesList.module.scss';
import trackUrl from '../../../assets/icons/track.svg';
import phoneUrl from '../../../assets/icons/phone.svg';
import bagUrl from '../../../assets/icons/bag.svg';
import cashUrl from '../../../assets/icons/cash.svg';

import { AdvantageItem } from './AdvantageItem/AdvantageItem';

const advantages = [
  {
    icon: trackUrl,
    header: 'Безкоштовна доставка',
    text: 'Безкоштовна доставка по всій Україні',
  },
  {
    icon: phoneUrl,
    header: 'Підтримка 24/7',
    text: 'Передзвонимо вам протягом хвилини',
  },
  {
    icon: bagUrl,
    header: 'Гарантія повернення ',
    text: 'Повернення товару протягом 30 днів',
  },
  {
    icon: cashUrl,
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
