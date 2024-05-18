import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import productsReducer from './products/slice';
import filterForCatalogReducer from './filters/filter';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    filterForCatalog: filterForCatalogReducer,
  },
});
// для типізації редакса
export type RootState = ReturnType<typeof store.getState>;
// типізація діспатч і використання AppDispatch
export type AppDispatch = typeof store.dispatch;
