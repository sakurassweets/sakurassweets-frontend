import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Slider.module.scss';

import { SliderBtn } from './SliderBtn/SliderBtn';
import { SliderPos } from './SliderPos/SliderPos';
import { Product } from '../../types/interfaces/Product';
import { Review } from '../../types/interfaces/Review';
import { ProductCard } from '../ProductCard/ProductCard';
import { ReviewCard } from '../ReviewCard.tsx/ReviewCard';

const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
};

interface Props {
  name: string;
  items: Product[] | Review[];
  marginBottom: number;
  type: string;
}

export const Slider: React.FC<Props> = ({ name, items, marginBottom, type }) => {
  const [pos, setPos] = useState(0);

  const lastItem = type === 'product' ? items.length - 3 : items.length - 2;
  const itemWidth = type === 'product' ? 326 : 435;
  const itemOnPaige = type === 'product' ? 4 : 3;
  const maxPos = -1 * itemWidth * (lastItem - 1);

  console.log(type, '   =   ', items.length);

  function handleClick(direction: string) {
    const pol = direction === DIRECTION.LEFT ? 1 : -1;
    if (pol === 1 && pos === 0) {
      setPos(-1 * lastItem * itemWidth);
    }
    if (pol === -1 && pos === maxPos) {
      setPos(0);
    } else {
      setPos((prev) => prev + pol * itemWidth);
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
      <div className={classNames(classes.slider_content)} style={{ height: type === 'product' ? '401px' : '183px' }}>
        <SliderBtn
          direction={DIRECTION.LEFT}
          onClick={(direction: string) => handleClick(direction)}
          display={items.length > itemOnPaige}
        />
        <div className={classNames(classes.slider_window)}>
          <div className={classNames(classes.slider_cards)} style={{ transform: `translate(${pos}px)` }}>
            {items.map((card: Product | Review) =>
              type === 'product' ? (
                <ProductCard product={card as Product} key={Math.random() * Math.random()} />
              ) : (
                <ReviewCard review={card as Review} key={Math.random() * Math.random()} />
              )
            )}
          </div>
        </div>
        <SliderBtn
          direction={DIRECTION.RIGHT}
          onClick={(direction: string) => handleClick(direction)}
          display={items.length > itemOnPaige}
        />
        <SliderPos
          sliderPos={Math.ceil((pos * 7) / maxPos) === 0 ? 1 : Math.ceil((pos * 7) / maxPos)}
          display={type === 'review' && items.length > itemOnPaige}
        />
      </div>
    </div>
  );
};
