import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <div className={classNames(classes.hero)}>
      <h1 className={classNames(classes.hero_header)}>Магазин японських солодощів</h1>
      <p className={classNames(classes.hero_text)}>Унікальний вибір традиційних та сучасних смаколиків</p>
      <NavLink to="/catalog" className={classNames(classes.hero_btn)}>
        Біжу купляти
      </NavLink>
    </div>
  );
};
