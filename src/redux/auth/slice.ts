import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginThunk, registerThunk } from './operations';

interface AuthState {
  access: string;
  refresh: string;
  email?: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  access: '',
  refresh: '',
  email: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.access = payload.access;
        state.refresh = payload.refresh;
        state.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.access = payload.access;
        state.refresh = payload.refresh;
        state.email = payload.email;
        state.isLoggedIn = true;
      });
  },
});

export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
