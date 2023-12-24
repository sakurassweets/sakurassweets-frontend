import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
// для типізації редакса
export type RootState = ReturnType<typeof store.getState>;
// типізація діспатч і використання AppDispatch
export type AppDispatch = typeof store.dispatch;
