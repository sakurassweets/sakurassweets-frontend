import UserRoutes from './UserRoutes';
import { useAppDispatch } from '../redux/hook';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations';
import { fetchCartThunk } from '../redux/cart/operations';
import { Layout } from './Layout/Layout';
import { useLocation } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchCartThunk());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <UserRoutes />
    </Layout>
  );
}

export default App;
