import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByPriceFrom, filterByPriceTo } from '../../../../../redux/filters/filter';

import styled from './price.module.scss';

interface PriceProps {
  minValue: number;
  maxValue: number;
}

export const Price: React.FC<PriceProps> = ({ minValue, maxValue }) => {
  const [startValue, setStartValue] = useState(minValue);
  const [endValue, setEndValue] = useState(maxValue);

  const dispatch = useDispatch();

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartValue(parseInt(event.target.value, 10));
  };

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndValue(parseInt(event.target.value, 10));
  };

  const handleStartInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setStartValue(value);
    setEndValue(Math.max(value, endValue));
  };

  const handleEndInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setEndValue(value);
    setStartValue(Math.min(value, startValue));
  };

  useEffect(() => {
    dispatch(filterByPriceFrom(startValue));
    dispatch(filterByPriceTo(endValue));
  }, [dispatch, startValue, endValue]);

  return (
    <div className={styled.content}>
      <div className={styled.slider}>
        <div
          className={styled.progress}
          style={{
            left: `${((startValue - minValue) / (maxValue - minValue)) * 100}%`,
            width: `${((endValue - startValue) / (maxValue - minValue)) * 100}%`,
          }}
        ></div>
      </div>
      <div className={styled.range}>
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={startValue}
          onChange={handleStartChange}
          className={styled.range_input}
        />
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={endValue}
          onChange={handleEndChange}
          className={styled.range_input}
        />
      </div>
      <div className={styled.input_block}>
        <div className={styled.input_wrapper}>
          <span className={styled.input_label}>Мінімум</span>
          <input className={styled.input} type="number" value={startValue} onChange={handleStartInputChange} />
        </div>
        <div className={styled.input_wrapper}>
          <span className={styled.input_label}>Максимум</span>
          <input className={styled.input} type="number" value={endValue} onChange={handleEndInputChange} />
        </div>
      </div>
    </div>
  );
};
