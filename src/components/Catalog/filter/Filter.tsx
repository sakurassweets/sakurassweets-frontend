import React from 'react';

import { Accordion } from './accordion/Accordion';
import { Price } from './contents/price/Price';

import styled from './filter.module.scss';

export const Filter: React.FC = () => {
  return (
    <>
      <h1 className={styled.title}>Фільтри</h1>
      <Accordion title="Ціна" content={<Price minValue={0} maxValue={20000} />} id={1} />
      <Accordion title="Категорія" content="Content" id={1} />
      <Accordion title="Рейтинг" content="Content" id={1} />
    </>
  );
};
