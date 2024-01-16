import classes from './HeaderControl.module.scss';
import { LuUser, LuShoppingCart, LuHeart } from 'react-icons/lu';

interface HeaderControlProps {
  openModal: () => void;
}

export const HeaderControl: React.FC<HeaderControlProps> = ({ openModal }) => {
  const buttons = [
    { icon: <LuHeart />, onClick: () => console.log('Favorite clicked') },
    { icon: <LuUser />, onClick: openModal },
    { icon: <LuShoppingCart />, onClick: () => console.log('Cart clicked') },
  ];

  return (
    <div className={classes.headerControl}>
      <p className={classes.language}>UA</p>
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
