import { InfinitySpin } from 'react-loader-spinner';
import classes from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <InfinitySpin width="200" color="#CB5980" />
    </div>
  );
};
