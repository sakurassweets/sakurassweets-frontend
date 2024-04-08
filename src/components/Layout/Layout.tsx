import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import classes from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
    </>
  );
};
