import { createAsyncThunk } from '@reduxjs/toolkit';
import { authFormValues } from '../../models/auth';

const BASE_URL = 'https://api.sakurassweets.asion.tk/';

interface AuthData {
  access: string;
  refresh: string;
  email?: string;
}

export const loginThunk = createAsyncThunk<AuthData, authFormValues, { rejectValue: string }>(
  'auth/login',
  async (credentials, ThunkAPI) => {
    const res = await fetch(`${BASE_URL}login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();

    if (!res.ok && res.status === 401) {
      return ThunkAPI.rejectWithValue('Incorrect email or password');
    } else if (!res.ok) {
      return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
    }

    return { ...data, email: credentials.email };
  }
);

export const registerThunk = createAsyncThunk<AuthData, authFormValues, { rejectValue: string }>(
  'auth/register',
  async (credentials, ThunkAPI) => {
    const res = await fetch(`${BASE_URL}register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();

    if (!res.ok && res.status === 401) {
      return ThunkAPI.rejectWithValue('Incorrect email or password');
    } else if (!res.ok) {
      return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
    }

    return { ...data, email: credentials.email };
  }
);
