import classes from './HeaderControl.module.scss';
import { LuUser, LuShoppingCart, LuHeart, LuChevronDown } from 'react-icons/lu';

interface HeaderControlProps {
  openModal: () => void;
}

export const HeaderControl: React.FC<HeaderControlProps> = ({ openModal }) => {
  const buttons = [
    { icon: <LuHeart />, onClick: () => console.log('Favorite clicked') },
    { icon: <LuShoppingCart />, onClick: () => console.log('Cart clicked') },
    { icon: <LuUser />, onClick: openModal },
  ];

  return (
    <div className={classes.headerControl}>
      <p className={classes.headerControl__lang}>
        UA <LuChevronDown />
      </p>
      <ul className={classes.headerControl__list}>
        {buttons.map((button, index) => (
          <li key={index}>
            <button onClick={button.onClick} className={classes.headerControl__btn}>
              {button.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
