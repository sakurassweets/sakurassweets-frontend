import React from 'react';
import classNames from 'classnames';
import classes from './FavoriteBtn.module.scss';

interface Props {
  favorite: boolean;
  onClick: () => void;
}

export const FavoriteBtn: React.FC<Props> = ({ favorite, onClick }) => {
  return (
    <button
      className={`${classNames(classes.container)} ${favorite ? classNames(classes.favorite) : ''}`}
      onClick={onClick}
    ></button>
  );
};
