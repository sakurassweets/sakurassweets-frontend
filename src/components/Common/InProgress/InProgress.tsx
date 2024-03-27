import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons';
import classes from './InProgress.module.scss';

export const InProgress = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.inProgress}>
      <h2 className={classes.inProgress__title}>Ця сторінка знаходиться в розробці</h2>
      <div className={classes.inProgress__img}></div>
      <Button className={classes.inProgress__btn} onClick={() => navigate('/')}>
        На головну сторінку
      </Button>
    </div>
  );
};
