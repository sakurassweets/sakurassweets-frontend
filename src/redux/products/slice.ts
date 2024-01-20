import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllProductsThunk } from './operations';
import { ProductsState } from '../../types/interfaces/Product';

const initialState: ProductsState = {
  products: {},
  isLoading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addMatcher(isAnyOf(fetchAllProductsThunk.fulfilled), (state) => {
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchAllProductsThunk.pending), (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(isAnyOf(fetchAllProductsThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ?? 'Error refreshing token';
      });
  },
});

export default productsSlice.reducer;
