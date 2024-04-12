import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Common/Buttons';
import classes from './cartStub.module.scss';

export const CartStub = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.stub}>
      <h2 className={classes.stub__title}>Ваш кошик пустий :(</h2>
      <div className={classes.stub__img}></div>
      <Button className={classes.stub__btn} onClick={() => navigate('/catalog')}>
        Перейти до покупок
      </Button>
    </div>
  );
};
