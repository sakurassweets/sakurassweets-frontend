import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Hero, AdvantagesList } from '../../components/HomePaige/';

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <AdvantagesList />
        <ProductCard />
      </div>
    </main>
  );
};

export default MainPage;
