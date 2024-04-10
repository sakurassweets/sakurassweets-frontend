import { StylesConfig } from 'react-select';

export const customStyles: StylesConfig = {
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '302px',
    marginLeft: 'auto',
    padding: '16px',
    color: 'white',
    borderRadius: '8px',
    backgroundColor: '#404966',
    outline: 'none',
    cursor: 'pointer',
    borderColor: 'red',
  }),
  // valueContainer: () => ({
  //   margin: '0',
  //   padding: '0',
  //   color: 'white',
  // }),
  placeholder: () => ({
    position: 'absolute',
    margin: '0',
    padding: '0',
    fontWeight: '600',
  }),
  // input: () => ({
  //   margin: '0',
  //   padding: '0',
  // }),
  // singleValue: () => ({
  //   color: 'white',
  //   fontWeight: '600',
  // }),
  option: () => ({
    padding: '16px',
    backgroundColor: '#404966',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'white',
  }),

  menu: () => ({
    marginLeft: 'auto',
    maxWidth: '302px',
    backgroundColor: '#404966',
    borderRadius: '8px',
  }),
  menuList: () => ({
    maxWidth: '219px',
    margin: '20px 0',
    padding: '0',
    borderRadius: '8px',
  }),
  dropdownIndicator: (state) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
