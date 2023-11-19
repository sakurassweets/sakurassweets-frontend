import { MainHeader } from './MainHeader/MainHeader';
import { SubHeader } from './SubHeader/SubHeader';

export const Header: React.FC = () => {
  return (
    <header>
      <SubHeader />
      <MainHeader />
    </header>
  );
};
