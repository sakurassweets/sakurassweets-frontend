import classes from '../reviews.module.scss';

export const Title = () => {
  return (
    <div className={classes.reviews__title_wrapper}>
      <h2 className={classes.reviews__title}>
        Відгуки <span>(17)</span>
      </h2>
      <button className={classes.reviews__btn}>Написати відгук</button>
    </div>
  );
};
