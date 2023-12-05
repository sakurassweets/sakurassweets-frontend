import React from 'react';
import classNames from 'classnames';
import classes from './SliderBtn.module.scss';

interface Props {
  direction: string;
  onClick: (direction: string) => void;
  display: boolean;
}

export const SliderBtn: React.FC<Props> = ({ direction, onClick, display }) => {
  return (
    <button
      className={`${classNames(classes.container)} ${
        direction === 'left' ? classNames(classes.container__left) : classNames(classes.container__right)
      }`}
      onClick={() => onClick(direction)}
      style={{ display: `${display ? 'block' : 'none'}` }}
    ></button>
  );
};
