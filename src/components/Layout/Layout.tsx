import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import classes from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};
