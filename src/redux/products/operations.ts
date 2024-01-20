import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/config';
import { ProductsData } from '../../types/interfaces/Product';

//GetAllProducts
export const fetchAllProductsThunk = createAsyncThunk<ProductsData, void, { rejectValue: string }>(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('/products');
      console.log(data.results);
      return data.results;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred');
    }
  }
);
