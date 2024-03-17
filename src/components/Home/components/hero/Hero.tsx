import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ROUTERS } from '../../../../constants/routers';

import classes from './hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={classNames(classes.hero)}>
      <div className={classNames(classes.hero_content, 'container')}>
        <h1 className={classNames(classes.hero_title)}>Магазин японських солодощів</h1>
        <p className={classNames(classes.hero_text)}>Унікальний вибір традиційних та сучасних смаколиків</p>
        <NavLink to={ROUTERS.CATALOG} className={classNames(classes.hero_btn)}>
          Біжу купляти
        </NavLink>
      </div>
    </section>
  );
};
