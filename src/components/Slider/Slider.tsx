import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Slider.module.scss';

import { SliderBtn } from './SliderBtn/SliderBtn';

const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
};

const name = 'Акції';

const ex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Slider = () => {
  const [pos, setPos] = useState(0);

  function handleClick(direction: string) {
    const pol = direction === DIRECTION.LEFT ? 1 : -1;
    if (pol === 1 && pos === 0) {
      setPos(-2934);
    }
    if (pol === -1 && pos === -2608) {
      setPos(0);
    } else {
      setPos((prev) => prev + pol * 326);
    }
  }

  return (
    <div className={classNames(classes.slider_container)}>
      <div className={classNames(classes.slider_header)}>
        <p className={classNames(classes.slider_name)}>{name}</p>
        <NavLink to="/catalog" className={classNames(classes.slider_link)}>
          Всі з категорії
        </NavLink>
      </div>
      <div className={classNames(classes.slider_content)}>
        <SliderBtn direction={DIRECTION.LEFT} onClick={(direction: string) => handleClick(direction)} />
        <div className={classNames(classes.slider_window)}>
          <div className={classNames(classes.slider_cards)} style={{ transform: `translate(${pos}px)` }}>
            {ex.map((card) => (
              <div className={classNames(classes.item)} key={Date.now() + Math.random() + card}>
                Item{card}
              </div>
            ))}
          </div>
        </div>
        <SliderBtn direction={DIRECTION.RIGHT} onClick={(direction: string) => handleClick(direction)} />
      </div>
    </div>
  );
};
