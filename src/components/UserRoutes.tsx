import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from '../constants/routers';
import { Loader } from './Common';

const HomePage = lazy(() => import('../pages/Home/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));
const FavoritesPage = lazy(() => import('../pages/Favorites/Favorites'));
const AboutUsPage = lazy(() => import('../pages/AboutUs/AboutUs'));
const CatalogPage = lazy(() => import('../pages/Catalog/Catalog'));
const CartPage = lazy(() => import('../pages/Cart/Cart'));
const ProductCardPage = lazy(() => import('../pages/ProductCard/ProductCard'));
const UserAccountPage = lazy(() => import('../pages/UserAccount/UserAccount'));
const DocumentsPage = lazy(() => import('../pages/Document/Document'));
const History = lazy(() => import('../pages/History/History'));
const Delivery = lazy(() => import('../pages/Delivery/Delivery'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTERS.HOME} element={<HomePage />} />
        <Route path={ROUTERS.CATALOG} element={<CatalogPage />} />
        <Route path={ROUTERS.ABOUT_US} element={<AboutUsPage />} />
        <Route path={ROUTERS.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTERS.CART} element={<CartPage />} />
        <Route path={ROUTERS.PRODUCT} element={<ProductCardPage />} />
        <Route path={ROUTERS.ACCOUNT} element={<UserAccountPage />} />
        <Route path={ROUTERS.DOCS} element={<DocumentsPage />} />
        <Route path={ROUTERS.HISTORY} element={<History />} />
        <Route path={ROUTERS.DELIVERY} element={<Delivery />} />
        <Route path={ROUTERS.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
