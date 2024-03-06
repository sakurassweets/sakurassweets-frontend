import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllProductsThunk, fetchProductByIdThunk } from './operations';
import { Product } from '../../types/interfaces/Product';

export interface ProductsState {
  products: Product[];
  productDetails: Product;
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  productDetails: {},
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
      .addCase(fetchProductByIdThunk.fulfilled, (state, { payload }) => {
        state.productDetails = payload;
      })
      .addMatcher(isAnyOf(fetchAllProductsThunk.fulfilled), (state) => {
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchAllProductsThunk.pending, fetchProductByIdThunk.pending), (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(isAnyOf(fetchAllProductsThunk.rejected, fetchProductByIdThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ?? 'Error refreshing token';
      });
  },
});

export default productsSlice.reducer;
