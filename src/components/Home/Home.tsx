import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchAllProductsThunk } from '../../redux/products/operations';
import { Review } from '../../types/interfaces/Review';
import { Hero, AdvantagesList, Presentation } from './index';
import { SliderComponent } from '../Common';

export const TYPE = {
  PRODUCT: 'product',
  REVIEW: 'review',
};

function randomize(max: number): number {
  return Math.floor(Math.random() * max);
}

function createCollectReviews(): Review[] {
  const defaultReviews: Review[] = [];
  const quantityReviews = randomize(20) + 1;

  for (let i = 0; i < quantityReviews; i++) {
    defaultReviews.push({
      authorName: 'Eleanor Pena',
      dateCreation: '20.03.2023',
      rating: randomize(501) / 100,
      productName: "Samyang launches rose-flavored 'Buldak' noodle",
      productImg: 'https://i.postimg.cc/KzGNQtP8/photo-of-the-product-1.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur. Lectus vulputate ut enim nec eget accumsan.',
    });
  }

  return defaultReviews;
}

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <AdvantagesList />

      <section>
        <div className="container">
          <SliderComponent name="Акції" items={products} marginBottom={62} type={TYPE.PRODUCT} dots={true} slides={4} />
        </div>
      </section>
      <section>
        <div className="container">
          <SliderComponent
            name="Хіт продажу"
            items={products}
            marginBottom={98}
            type={TYPE.PRODUCT}
            dots={true}
            slides={4}
          />
        </div>
      </section>
      <Presentation />
      <section>
        <div className="container">
          <SliderComponent
            name="Рекомендуємо"
            items={products}
            marginBottom={100}
            type={TYPE.PRODUCT}
            dots={true}
            slides={4}
          />
        </div>
      </section>
      <section>
        <div className="container">
          <SliderComponent
            name="Відгуки"
            items={createCollectReviews()}
            marginBottom={148}
            type={TYPE.REVIEW}
            dots={true}
            slides={3}
          />
        </div>
      </section>
    </>
  );
};
