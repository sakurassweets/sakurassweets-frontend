import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...here will be Loader Component</div>}>
      <Routes>
         <Route
          path="/welcome"
          element={
            // <PublicRoute>
              <MainPage/>
            // </PublicRoute>
          }
        />
        {/* <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        /> */}
        
       
          <Route
            path="*"
            element={
              // <PublicRoute>
                <NotFoundPage />
              // </PublicRoute>
            }
          />
         
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
