import React from 'react';

import { Accordion } from './accordion/Accordion';
import { Price } from './contents/price/Price';
import { Category } from './contents/category/Category';
import { Raiting } from './contents/raiting/Raiting';

import styled from './filter.module.scss';

export const Filter: React.FC = () => {
  return (
    <div className={styled.filter__wrapper}>
      <h1 className={styled.title}>Фільтри</h1>
      <Accordion title="Ціна" content={<Price minValue={0} maxValue={1000} />} id={1} />
      <Accordion title="Категорія" content={<Category />} id={2} />
      <Accordion title="Рейтинг" content={<Raiting minValue={0} maxValue={5} />} id={3} />
    </div>
  );
};
