import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Cart } from '../../types/interfaces/Cart';
import { fetchCartThunk } from './operations';

export interface CartState {
  cart: Cart[];
  isLoading: boolean;
  error: string;
}

const initialState: CartState = {
  cart: [],
  isLoading: false,
  error: '',
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.fulfilled, (state, { payload }) => {
        state.cart = payload;
      })
      .addMatcher(isAnyOf(fetchCartThunk.fulfilled), (state) => {
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchCartThunk.pending), (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(isAnyOf(fetchCartThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ?? 'Error refreshing token';
      });
  },
});

export default cartSlice.reducer;
