import { Hero, AdvantagesList } from '../../components/HomePaige/';
import { Slider } from '../../components/Slider/Slider';

//It is only for exampels, in product all this need delete
import { Product } from '../../types/interfaces/Product';

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

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <AdvantagesList />
        <Slider name="Акції" items={createCollectProducts()} marginBottom={62} />
        <Slider name="Хіт продажу" items={createCollectProducts()} marginBottom={98} />
        <Slider name="Рекомендуємо" items={createCollectProducts()} marginBottom={40} />
      </div>
    </main>
  );
};

export default MainPage;
