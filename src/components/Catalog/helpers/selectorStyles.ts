import { StylesConfig } from 'react-select';

export const customStyles: StylesConfig = {
  container: () => ({
    alignSelf: 'flex-end',
  }),
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    width: '302px',
    color: 'white',
    borderRadius: '8px',
    backgroundColor: '#404966',
    outline: 'none',
    cursor: 'pointer',
    borderColor: 'red',
  }),
  option: () => ({
    padding: '16px',
    backgroundColor: '#404966',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'white',
  }),
  indicatorSeparator: () => ({
    displa: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    top: '240px',
    maxWidth: '302px',
    backgroundColor: '#404966',
    borderRadius: '8px',
    zIndex: '100',
  }),
  menuList: (provided) => ({
    ...provided,
    maxWidth: '219px',
    padding: '0',
    borderRadius: '8px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer',
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
  }),
};
