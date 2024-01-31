import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import classes from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};
