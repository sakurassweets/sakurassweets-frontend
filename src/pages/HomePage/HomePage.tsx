import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Hero } from '../../components/Hero/Hero';

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <ProductCard />
      </div>
    </main>
  );
};

export default MainPage;
