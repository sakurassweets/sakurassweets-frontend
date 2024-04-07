import { useEffect, useState } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../../../../redux/filters/filter';

import styled from './category.module.scss';

interface CategoryProps {}

interface CategoryState {
  categoryItem: string[];
}

export const Category: React.FC<CategoryProps> = () => {
  const [categoryItem, setCategoryItem] = useState<CategoryState['categoryItem']>([]);
  const categoryList: string[] = ['Мочі', 'Печиво', 'Батончики', 'Льодяники', 'Набори', 'Напої'];

  const dispatch = useDispatch();

  function handleChange(item: string) {
    if (categoryItem.includes(item)) {
      setCategoryItem(categoryItem.filter((category) => category !== item));
    } else {
      setCategoryItem([...categoryItem, item]);
    }
  }
  useEffect(() => {
    dispatch(filterByCategory(categoryItem));
  }, [dispatch, categoryItem]);

  const content = categoryList.map((item, index) => (
    <label key={index} className={styled.list}>
      <Checkbox checked={categoryItem.includes(item)} onChange={() => handleChange(item)} />
      <span className={styled.text}>{item}</span>
    </label>
  ));

  return <div className={styled.wrapper}>{content}</div>;
};
