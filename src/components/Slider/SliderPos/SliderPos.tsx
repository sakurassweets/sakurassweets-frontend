import React from 'react';
import classNames from 'classnames';
import classes from './SliderPos.module.scss';

interface Props {
  sliderPos: number;
  display: boolean;
}

export const SliderPos: React.FC<Props> = ({ sliderPos, display }) => {
  return (
    <div className={classNames(classes.container)} style={{ display: display ? 'flex' : 'none' }}>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div
          className={classNames(classes.item)}
          style={{ width: item === sliderPos ? '24px' : '8px' }}
          key={item}
        ></div>
      ))}
    </div>
  );
};
