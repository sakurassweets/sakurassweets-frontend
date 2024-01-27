import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/config';
import { Cart } from '../../types/interfaces/Cart';

//GetCartByID
export const fetchCartThunk = createAsyncThunk<Cart[], undefined, { rejectValue: string }>(
  'cart/getCartByID',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`/carts`);
      console.log('GetCartByID', data.results);
      return data.results;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred');
    }
  }
);
