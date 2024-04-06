import { useEffect, useState } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../../../../redux/filters/filter';

import styled from './category.module.scss';

export const Category = () => {
  const [categoryItem, setCategoryItem] = useState([]);
  const categoryList: string[] = ['Мочі', 'Печиво', 'Батончики', 'Льодяники', 'Набори', 'Напої'];

  const dispatch = useDispatch();

  function handleChange(item) {
    if (categoryItem.includes(item)) {
      setCategoryItem(categoryItem.filter((category) => category !== item));
    } else {
      setCategoryItem([...categoryItem, item]);
    }
  }
  useEffect(() => {
    dispatch(filterByCategory(categoryItem));
  }, [dispatch, categoryItem]);

  console.log(categoryItem);
  const content = categoryList.map((item, index) => (
    <label key={index} className={styled.list}>
      <Checkbox checked={categoryItem.includes(item)} onChange={() => handleChange(item)} />
      <span className={styled.text}>{item}</span>
    </label>
  ));

  return <div className={styled.wrapper}>{content}</div>;
};
