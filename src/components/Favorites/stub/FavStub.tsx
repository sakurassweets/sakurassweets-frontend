import { useNavigate } from 'react-router-dom';
import { Button } from '../../Common/Buttons';
import classes from './favstub.module.scss';

export const FavStub = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.stub}>
      <h2>Ви не додали товари до улюбленого</h2>
      <div className={classes.stub__img}></div>
      <Button className={classes.stub__btn} onClick={() => navigate('/catalog')}>
        До каталогу
      </Button>
    </div>
  );
};
