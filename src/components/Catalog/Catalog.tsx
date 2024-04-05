import React from 'react';
import { PaginatedItems } from './CatalogProducts/CatalogProducts';

import { Filter } from './filter/Filter';

import styled from './catalog.module.scss';

export const Catalog: React.FC = () => {
  return (
    <div className={styled.wrapper}>
      <Filter />
      <PaginatedItems itemsPerPage={6} />
    </div>
  );
};
