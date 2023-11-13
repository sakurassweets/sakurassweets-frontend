import { MainHeader } from './MainHeader/MainHeader';
import { SubHeader } from './SubHeader/SubHeader';

export const Header = () => {
  return (
    <header>
      <SubHeader />
      <MainHeader />
    </header>
  );
};
