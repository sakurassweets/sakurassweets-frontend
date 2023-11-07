import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Category = lazy(() => import("./pages/Сategory/Сategory"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));


const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route
          path="/category"
          element={
            // <PublicRoute>
              <Category/>
            // </PublicRoute>
          }
        />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/blog" element={<Blog/>} />     
       
        <Route path="*" element={<NotFoundPage />} />
         
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
