import styled from './checkbox.module.scss';

export const Checkbox = ({ checked, onChange }) => {
  return <input type="checkbox" checked={checked} onChange={onChange} className={styled.checkbox} />;
};
