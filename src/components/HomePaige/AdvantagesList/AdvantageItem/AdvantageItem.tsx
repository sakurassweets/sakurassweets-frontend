import React from 'react';
import classNames from 'classnames';
import classes from './AdvantageItem.module.scss';
import config from './advantageItemConfig';

interface Props {
  advantage: {
    icon: string;
    header: string;
    text: string;
  };
}

export const AdvantageItem: React.FC<Props> = ({ advantage: { icon, header, text } }) => {
  return (
    <div className={classNames(classes.advantageItem)}>
      <div
        className={classNames(classes.advantageIcon)}
        style={{ backgroundImage: `url(${config.imagePath + icon})` }}
      ></div>
      <div className={classNames(classes.advantageText)}>
        <p className={classNames(classes.advantageHeader)}>{header}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
