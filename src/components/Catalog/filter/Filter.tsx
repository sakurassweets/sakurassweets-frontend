import React from 'react';

import { Accordion } from './accordion/Accordion';
import { Price } from './contents/price/Price';
import { Category } from './contents/category/Category';

import styled from './filter.module.scss';
import { Raiting } from './contents/raiting/Raiting';

export const Filter: React.FC = () => {
  return (
    <>
      <h1 className={styled.title}>Фільтри</h1>
      <Accordion title="Ціна" content={<Price minValue={0} maxValue={20000} />} id={1} />
      <Accordion title="Категорія" content={<Category />} id={2} />
      <Accordion title="Рейтинг" content={<Raiting />} id={3} />
    </>
  );
};
