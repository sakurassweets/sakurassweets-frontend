import UserRoutes from './UserRoutes';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hook';
import { useLocation } from 'react-router-dom';
import { refreshThunk } from '../redux/auth/operations';
import { Layout } from './Layout/Layout';

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(refreshThunk());
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
