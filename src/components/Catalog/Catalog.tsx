import React from 'react';

import { Filter } from './filter/Filter';

import styled from './catalog.module.scss';

export const Catalog: React.FC = () => {
  return (
    <div className={styled.wrapper}>
      <Filter />
    </div>
  );
};
