import UserRoutes from './UserRoutes';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { useAppDispatch } from '../redux/hook';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations';
import { fetchAllProductsThunk } from '../redux/products/operations';
// import { Navigation } from './Navigation/Navigation';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <UserRoutes />
      <Footer />
    </>
  );
}

export default App;
