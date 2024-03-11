import React from 'react';

import { Checkbox } from '../checkbox/Checkbox';

import styled from './raiting.module.scss';

export const Raiting: React.FC = () => {
  return (
    <div className={styled.wrapper}>
      <Checkbox />
    </div>
  );
};
