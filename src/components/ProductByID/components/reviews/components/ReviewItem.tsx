import user_avatar from '../../../../../assets/img/review_img.jpeg';
import classes from '../reviews.module.scss';
import { IconReviews } from './IconReviews';

export const ReviewItem = () => {
  return (
    <div className={classes.reviews__item_wrapper}>
      <img src={user_avatar} alt="User avatar" width={77} height={77} className={classes.reviews__item_img} />
      <div>
        <h3 className={classes.reviews__item_title}>Миколаєнко Олена</h3>
        <IconReviews />
        <p className={classes.reviews__item_text}>
          Дуже смачна вермішель, використовую як базу для супів або м'яса з овочами. Пачка дуже легко ділиться на чотири
          порції, що дуже зручно. Однозначно рекомендую!
        </p>
      </div>
    </div>
  );
};
