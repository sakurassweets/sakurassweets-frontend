import { createAsyncThunk } from '@reduxjs/toolkit';
import { authFormValues } from '../../models/auth';
import axios from 'axios';
import { API, clearToken, setToken } from '../../config/config';

interface AuthData {
  access: string;
  refresh: string;
  email?: string;
}
//login
export const loginThunk = createAsyncThunk<AuthData, authFormValues, { rejectValue: string }>(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const response = await API.post('login/', credentials);

      const data = response.data;
      localStorage.setItem('token', JSON.stringify(data));

      return { ...data, email: credentials.email };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 401) {
          return ThunkAPI.rejectWithValue('Incorrect email or password');
        }
      }
      return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
    }
  }
);
// Register
export const registerThunk = createAsyncThunk<AuthData, authFormValues, { rejectValue: string }>(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      const response = await API.post('register/', credentials);
      const data = response.data;
      localStorage.setItem('token', JSON.stringify(data));
      return { ...data, email: credentials.email };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 401) {
          return ThunkAPI.rejectWithValue('Incorrect email or password');
        }
      }
      return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
    }
  }
);

//Refresh
export const refreshThunk = createAsyncThunk<AuthData, undefined, { rejectValue: string }>(
  'auth/refresh',
  async (_, ThunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem('token') as string);
      if (!token) {
        return ThunkAPI.rejectWithValue('Token does not exist');
      }
      // Setting the token for the request
      setToken(token.access);

      const response = await API.post('refresh/', {
        refresh: token.refresh,
      });
      const data = response.data;
      localStorage.setItem('token', JSON.stringify(data));
      // Optional: Update the token in the header for subsequent requests
      setToken(data.access);
      return data;
    } catch (error) {
      clearToken(); // Clear token if refresh fails
      return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
    }
  }
);

//Logout
