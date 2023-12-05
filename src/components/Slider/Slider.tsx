import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Slider.module.scss';

import { SliderBtn } from './SliderBtn/SliderBtn';
import { Product } from '../../types/interfaces/Product';
import { ProductCard } from '../ProductCard/ProductCard';

const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
};

interface Props {
  name: string;
  items: Product[];
  marginBottom: number;
}

export const Slider: React.FC<Props> = ({ name, items, marginBottom }) => {
  const [pos, setPos] = useState(0);

  function handleClick(direction: string) {
    const pol = direction === DIRECTION.LEFT ? 1 : -1;
    if (pol === 1 && pos === 0) {
      setPos(-1 * (items.length - 3) * 326);
    }
    if (pol === -1 && pos === -2608) {
      setPos(0);
    } else {
      setPos((prev) => prev + pol * 326);
    }
  }

  return (
    <div className={classNames(classes.slider_container)} style={{ marginBottom: `${marginBottom}px` }}>
      <div className={classNames(classes.slider_header)}>
        <p className={classNames(classes.slider_name)}>{name}</p>
        <NavLink to="/catalog" className={classNames(classes.slider_link)}>
          Всі з категорії
        </NavLink>
      </div>
      <div className={classNames(classes.slider_content)}>
        <SliderBtn
          direction={DIRECTION.LEFT}
          onClick={(direction: string) => handleClick(direction)}
          display={items.length > 4}
        />
        <div className={classNames(classes.slider_window)}>
          <div className={classNames(classes.slider_cards)} style={{ transform: `translate(${pos}px)` }}>
            {items.map((card) => (
              <ProductCard product={card} key={Math.random() * Math.random()} />
              <ProductCard product={card} />
            ))}
          </div>
        </div>
        <SliderBtn
          direction={DIRECTION.RIGHT}
          onClick={(direction: string) => handleClick(direction)}
          display={items.length > 4}
        />
      </div>
    </div>
  );
};
