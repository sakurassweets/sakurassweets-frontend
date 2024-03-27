import { useNavigate } from 'react-router-dom';
import { LuUser, LuShoppingCart, LuHeart, LuChevronDown } from 'react-icons/lu';
import { ROUTERS } from '../../../../../constants/routers';
import classes from './headerControl.module.scss';
import { useAppSelector } from '../../../../../redux/hook';

interface HeaderControlProps {
  openModal: () => void;
}

export const HeaderControl: React.FC<HeaderControlProps> = ({ openModal }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  console.log('isLoggedIn', isLoggedIn);

  const buttons = [
    { icon: <LuHeart />, onClick: () => navigate(ROUTERS.FAVORITES), id: 'heart-id' },
    { icon: <LuShoppingCart />, onClick: () => navigate(ROUTERS.CART), id: 'shopping-id' },
    { icon: <LuUser />, onClick: isLoggedIn ? () => navigate(ROUTERS.ACCOUNT) : openModal, id: 'user-id' },
  ];

  return (
    <div className={classes.headerControl}>
      <p className={classes.headerControl__lang}>
        UA <LuChevronDown />
      </p>
      <ul className={classes.headerControl__list}>
        {buttons.map((button) => (
          <li key={button.id}>
            <button onClick={button.onClick} className={classes.headerControl__btn}>
              {button.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
