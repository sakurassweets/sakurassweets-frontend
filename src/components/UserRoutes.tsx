import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Common/Loader/Loader';

const HomePage = lazy(() => import('../pages/Home/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));
const FavoritesPage = lazy(() => import('../pages/Favorites/Favorites'));
const AboutUsPage = lazy(() => import('../pages/AboutUs/AboutUs'));
const CatalogPage = lazy(() => import('../pages/Catalog/Catalog'));
const CartPage = lazy(() => import('../pages/Cart/Cart'));
const ProductCardPage = lazy(() => import('../pages/ProductCard/ProductCard'));
const UserAccountPage = lazy(() => import('../pages/UserAccount/UserAccount'));
const DocumentsPage = lazy(() => import('../pages/DocumentsPage/DocumentsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductCardPage />} />
        <Route path="/account" element={<UserAccountPage />} />
        <Route path="/docs/:name" element={<DocumentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
