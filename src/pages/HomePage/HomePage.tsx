import { Hero, AdvantagesList, Presentation } from '../../components/HomePaige/';
import { Slider } from '../../components/Slider/Slider';

const TYPE = {
  PRODUCT: 'product',
  REVIEW: 'review',
};

//It is only for exampels, in product all this need delete
import { Product } from '../../types/interfaces/Product';
import { Review } from '../../types/interfaces/Review';

function randomize(max: number): number {
  return Math.floor(Math.random() * max);
}

function createProduct(): Product {
  const defaultProduct: Product = {
    productName: 'Hanami Picnic',
    favorite: Boolean(randomize(2)),
    sale: {
      isActive: Boolean(randomize(2)),
      amount: randomize(100),
    },
    image: 'https://i.postimg.cc/KzGNQtP8/photo-of-the-product-1.jpg',
    rating: randomize(501) / 100,
    inStock: Boolean(randomize(2)),
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ',
    price: randomize(100000) / 100,
  };

  return defaultProduct;
}

function createCollectProducts(): Product[] {
  const defaultProduct: Product[] = [];

  for (let i = 0; i < 12; i++) {
    defaultProduct.push(createProduct());
  }

  return defaultProduct;
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

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <AdvantagesList />
        <Slider name="Акції" items={createCollectProducts()} marginBottom={62} type={TYPE.PRODUCT} />
        <Slider name="Хіт продажу" items={createCollectProducts()} marginBottom={98} type={TYPE.PRODUCT} />
        <Presentation />
        <Slider name="Рекомендуємо" items={createCollectProducts()} marginBottom={100} type={TYPE.PRODUCT} />
        <Slider name="Відгуки" items={createCollectReviews()} marginBottom={148} type={TYPE.REVIEW} />
      </div>
    </main>
  );
};

export default MainPage;
