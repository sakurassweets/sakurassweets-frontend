import { Hero, AdvantagesList, Presentation } from '../../components/Home';
import SliderComponent from '../../components/Common/Slider/Slider';

const TYPE = {
  PRODUCT: 'product',
  REVIEW: 'review',
};

import { Review } from '../../types/interfaces/Review';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { useEffect } from 'react';
import { fetchAllProductsThunk } from '../../redux/products/operations';
import { cloneProducts } from '../../helpers/cloneProducts';

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

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const clonedProducts = cloneProducts(products, 3);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <AdvantagesList />
      <SliderComponent
        name="Акції"
        items={clonedProducts}
        marginBottom={62}
        type={TYPE.PRODUCT}
        dots={true}
        slides={4}
      />
      <SliderComponent
        name="Хіт продажу"
        items={clonedProducts}
        marginBottom={98}
        type={TYPE.PRODUCT}
        dots={true}
        slides={4}
      />
      <Presentation />
      <SliderComponent
        name="Рекомендуємо"
        items={clonedProducts}
        marginBottom={100}
        type={TYPE.PRODUCT}
        dots={true}
        slides={4}
      />
      <SliderComponent
        name="Відгуки"
        items={createCollectReviews()}
        marginBottom={148}
        type={TYPE.REVIEW}
        dots={true}
        slides={3}
      />
    </main>
  );
};

export default Home;
