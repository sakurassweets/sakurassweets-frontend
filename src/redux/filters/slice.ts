import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ProductType } from '../../types/interfaces/ProductType';
import { fetchProductTypeThunk } from './operations';

interface CombinedState {
  filterForCatalog: {
    byPriceFrom: number;
    byPriceTo: number;
    byCategory: string[];
    byRatingFrom: number;
    byRatingTo: number;
  };
  productType: {
    productTypes: ProductType[];
    isLoading: boolean;
    error: string;
  };
}

// Initial state combining both
const initialState: CombinedState = {
  filterForCatalog: {
    byPriceFrom: 0,
    byPriceTo: 2000,
    byCategory: [],
    byRatingFrom: 0,
    byRatingTo: 5,
  },
  productType: {
    productTypes: [],
    isLoading: false,
    error: '',
  },
};

const combinedSlice = createSlice({
  name: 'combined',
  initialState,
  reducers: {
    // Filter actions
    filterByPriceFrom: (state, action: PayloadAction<number>) => {
      state.filterForCatalog.byPriceFrom = action.payload;
    },
    filterByPriceTo: (state, action: PayloadAction<number>) => {
      state.filterForCatalog.byPriceTo = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string[]>) => {
      state.filterForCatalog.byCategory = action.payload;
    },
    filterByRatingFrom: (state, action: PayloadAction<number>) => {
      state.filterForCatalog.byRatingFrom = action.payload;
    },
    filterByRatingTo: (state, action: PayloadAction<number>) => {
      state.filterForCatalog.byRatingTo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductTypeThunk.fulfilled, (state, { payload }) => {
        state.productType.productTypes = payload;
        state.productType.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchProductTypeThunk.fulfilled), (state) => {
        state.productType.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchProductTypeThunk.pending), (state) => {
        state.productType.isLoading = true;
        state.productType.error = '';
      })
      .addMatcher(isAnyOf(fetchProductTypeThunk.rejected), (state, action) => {
        state.productType.isLoading = false;
        state.productType.error = action.payload ?? 'Error occurred';
      });
  },
});

export const { filterByPriceFrom, filterByPriceTo, filterByCategory, filterByRatingFrom, filterByRatingTo } =
  combinedSlice.actions;

export default combinedSlice.reducer;
