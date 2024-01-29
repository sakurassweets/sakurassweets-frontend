import { Input } from '../../Input/Input';
import classes from './SearchForm.module.scss';
import { LuSearch, LuX } from 'react-icons/lu';
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
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <Input
        id="search"
        type="text"
        placeholder="Пошук товарів"
        controlClassName={classes.inputControl}
        className={classes.searchInput}
        value={inputValue}
        onChange={handleInputValue}
        icon={
          <button onClick={handleSubmit} className={classes.searchForm__btnSearch}>
            <LuSearch />
          </button>
        }
        closeIcon={
          inputValue && (
            <button type="button" onClick={clearInput} className={classes.searchForm__btnClose}>
              <LuX />
            </button>
          )
        }
      />
    </form>
  );
};
