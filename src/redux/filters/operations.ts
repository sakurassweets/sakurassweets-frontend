import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/config';
import { ProductType } from '../../types/interfaces/ProductType';

//GetProductType
export const fetchProductTypeThunk = createAsyncThunk<ProductType[], undefined, { rejectValue: string }>(
  'products/getProductType',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('/product-types');
      console.log('GetProductType', data.results);
      return data.results;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred');
    }
  }
);
