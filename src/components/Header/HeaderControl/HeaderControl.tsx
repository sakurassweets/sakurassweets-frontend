import { Button } from '../../Button/Button';
import sprite from '../../../assets/icons/sprite.svg';
import classes from './HeaderControl.module.scss';

interface HeaderControlProps {
  openModal: () => void;
}

export const HeaderControl: React.FC<HeaderControlProps> = ({ openModal }) => {
  return (
    <div className={classes.headerControl}>
      <div className={classes.language}>UA</div>
      <div className={classes.controlBtns}>
        <Button>
          <svg viewBox="0 0 32 32" className={classes.svg}>
            <use href={sprite + '#icon-favorite'}></use>
          </svg>
        </Button>
        <Button>
          <svg viewBox="0 0 32 32" className={classes.svg}>
            <use href={sprite + '#icon-user'}></use>
          </svg>
        </Button>
        <Button onClick={openModal}>
          <svg viewBox="0 0 32 32" className={classes.svg}>
            <use href={sprite + '#icon-cart'}></use>
          </svg>
        </Button>
      </div>
    </div>
  );
};
