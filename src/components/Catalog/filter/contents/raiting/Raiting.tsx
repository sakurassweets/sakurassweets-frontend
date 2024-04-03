import React, { useState } from 'react';

import styled from './raiting.module.scss';

interface RaitingProps {
  minValue: number;
  maxValue: number;
}

export const Raiting: React.FC<RaitingProps> = ({ minValue, maxValue }) => {
  const [startValue, setStartValue] = useState(minValue);
  const [endValue, setEndValue] = useState(maxValue);

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
