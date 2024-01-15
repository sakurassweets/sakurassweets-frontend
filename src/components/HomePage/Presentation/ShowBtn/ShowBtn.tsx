import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './ShowBtn.module.scss';

interface Props {
  type: string;
}

export const ShowBtn: React.FC<Props> = ({ type }) => {
  return (
    <NavLink
      to="/catalog"
      className={classNames(classes.showBtn)}
      style={{ width: type === 'big' ? '302px' : '108px' }}
    >
      Дивитись
    </NavLink>
  );
};
