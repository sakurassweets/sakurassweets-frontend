import { Hero, AdvantagesList } from '../../components/HomePaige/';
import { Slider } from '../../components/Slider/Slider';

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <AdvantagesList />
        <Slider />
      </div>
    </main>
  );
};

export default MainPage;
