import { Checkbox } from '../checkbox/Checkbox';

import styled from './category.module.scss';

export const Category = () => {
  const categoryList: string[] = ['Мочі', 'Печиво', 'Батончики', 'Льодяники', 'Набори', 'Напої'];

  const content = categoryList.map((item, index) => (
    <label key={index} className={styled.list}>
      <Checkbox />
      <span className={styled.text}>{item}</span>
    </label>
  ));

  return <div className={styled.wrapper}>{content}</div>;
};
