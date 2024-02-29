import classes from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  return (
    <div className={classes.thumb}>
      <h1 className={classes.title}>Ой! Здається, ви заблукали у світі солодких смаків.</h1>
      <p className={classes.text}>
        На жаль, сторінку, яку ви шукали, не знайдено. Можливо, вона зникла у світі невловимих смаколиків або переїхала
        на іншу адресу.
      </p>
      <p className={classes.text}>
        Поверніться назад і спробуйте знову насолодитися нашими найсмачнішими пропозиціями. Або перейдіть на головну
        сторінку, де вас чекають нові враження та солодкі зустрічі!
      </p>
      <div className={classes.img_wrapper}>
        <p className={classes.img_wrapper__text_left}>4</p>
        <p className={classes.img_wrapper__text_right}>4</p>
      </div>
    </div>
  );
};
