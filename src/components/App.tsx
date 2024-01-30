import UserRoutes from './UserRoutes';
import { useAppDispatch } from '../redux/hook';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations';
import { fetchCartThunk } from '../redux/cart/operations';
import { Layout } from './Layout/Layout';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchCartThunk());
  }, [dispatch]);

  return (
    <Layout>
      <UserRoutes />
    </Layout>
  );
}

export default App;
