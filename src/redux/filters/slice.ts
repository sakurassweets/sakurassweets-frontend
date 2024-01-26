import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ProductType } from '../../types/interfaces/ProductType';
import { fetchProductTypeThunk } from './operations';

export interface ProductsTypeState {
  productType: ProductType[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsTypeState = {
  productType: [],
  isLoading: false,
  error: '',
};

export const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductTypeThunk.fulfilled, (state, { payload }) => {
        state.productType = payload;
      })
      .addMatcher(isAnyOf(fetchProductTypeThunk.fulfilled), (state) => {
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchProductTypeThunk.pending), (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(isAnyOf(fetchProductTypeThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ?? 'Error refreshing token';
      });
  },
});

export default productTypeSlice.reducer;
