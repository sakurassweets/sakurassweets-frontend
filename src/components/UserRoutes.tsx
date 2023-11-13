import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
