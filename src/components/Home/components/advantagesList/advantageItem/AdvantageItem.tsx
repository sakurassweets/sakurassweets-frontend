import React from 'react';
import classNames from 'classnames';
import classes from './AdvantageItem.module.scss';

interface AdvantageItemProps {
  advantage: {
    icon: JSX.Element;
    header: string;
    text: string;
  };
}

export const AdvantageItem: React.FC<AdvantageItemProps> = ({ advantage: { icon, header, text } }) => {
  return (
    <li className={classNames(classes.advantage__item)}>
      <div className={classNames(classes.advantage__icon)}>{icon}</div>
      <div>
        <p className={classNames(classes.advantage__title)}>{header}</p>
        <p className={classNames(classes.advantage__text)}>{text}</p>
      </div>
    </li>
  );
};
