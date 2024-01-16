import { Input } from '../../Input/Input';
import classes from './SearchForm.module.scss';
import sprite from '../../../assets/icons/sprite.svg';
import { useState } from 'react';

export const SearchForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  // Submits search query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (inputValue.length > 0) {
      console.log(`Пошук: ${inputValue}`);
    }

    setInputValue('');
  };

  // Handles input changes
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  // Clears the input field
  const clearInput = (): void => {
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="search"
        type="text"
        placeholder="Пошук товарів"
        controlClassName={classes.inputControl}
        className={classes.searchInput}
        value={inputValue}
        onChange={handleInputValue}
        icon={
          <button onClick={handleSubmit}>
            <svg viewBox="0 0 32 32" className={classes.svgSearch}>
              <use href={sprite + '#icon-search'}></use>
            </svg>
          </button>
        }
        closeIcon={
          <button type="button" onClick={clearInput}>
            <svg viewBox="0 0 32 32" className={classes.svgClose}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
        }
      />
    </form>
  );
};
