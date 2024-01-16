import React from 'react';
import classNames from 'classnames';
import classes from './StarImg.module.scss';

interface Props {
  rating: number;
}

export const StarImg: React.FC<Props> = ({ rating }) => {
  return <div className={classNames(classes.container)} style={{ width: Math.floor(13 * rating) }}></div>;
};
