import classNames from 'classnames';
import classes from './tab.module.scss';

interface TabsProps {
  isActive: boolean;
  name: string;
  onClick: () => void;
}

export const Tab: React.FC<TabsProps> = ({ onClick, name, isActive }) => {
  const buttonClass = classNames({
    [classes.tabs__isActive]: isActive,
    [classes.tabs__secondary]: !isActive,
  });

  return (
    <div className={classes.wrapper}>
      <button type="button" className={buttonClass} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
