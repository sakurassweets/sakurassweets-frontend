import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const ProductCard = lazy(() => import('../pages/ProductCard/ProductCard'));
const UserAccount = lazy(() => import('../pages/UserAccount/UserAccount'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
