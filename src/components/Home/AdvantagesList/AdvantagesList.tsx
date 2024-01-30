import React from 'react';
import { LuTruck, LuPhone, LuShoppingBag, LuCircleDollarSign } from 'react-icons/lu';
import classNames from 'classnames';
import classes from './AdvantagesList.module.scss';

import { AdvantageItem } from './AdvantageItem/AdvantageItem';

const advantages = [
  {
    icon: <LuTruck />,
    header: 'Безкоштовна доставка',
    text: 'Безкоштовна доставка по всій Україні',
  },
  {
    icon: <LuPhone />,
    header: 'Підтримка 24/7',
    text: 'Передзвонимо вам протягом хвилини',
  },
  {
    icon: <LuShoppingBag />,
    header: 'Гарантія повернення',
    text: 'Повернення товару протягом 30 днів',
  },
  {
    icon: <LuCircleDollarSign />,
    header: '100% безпечна оплата',
    text: 'Ми гарантуємо безпеку ваших грошей',
  },
];

export const AdvantagesList: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <ul className={classNames(classes.advantages__list)}>
          {advantages.map((item, index) => (
            <AdvantageItem key={index} advantage={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
