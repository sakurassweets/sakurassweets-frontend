import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/config';
import { Product } from '../../types/interfaces/Product';
import { priceWithDiscount, productWithDiscount } from '../../helpers/index';

//GetAllProducts
export const fetchAllProductsThunk = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('/products/');
      return priceWithDiscount(data.results);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred');
    }
  }
);
//GetProductById
export const fetchProductByIdThunk = createAsyncThunk<Product, string, { rejectValue: string }>(
  'products/getById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`/products/${id}`);
      return productWithDiscount(data);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred');
    }
  }
);
