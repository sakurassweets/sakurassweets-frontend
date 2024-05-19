import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterForCatalogState {
  byPriceFrom: number;
  byPriceTo: number;
  byRatingFrom: number;
  byRatingTo: number;
  byCategory: string[];
}

const initialState: FilterForCatalogState = {
  byPriceFrom: 0,
  byPriceTo: 2000,
  byCategory: [],
  byRatingFrom: 0,
  byRatingTo: 5,
};

const filterForCatalogSlice = createSlice({
  name: 'filterForCatalog',
  initialState,
  reducers: {
    filterByPriceFrom: (state, action: PayloadAction<number>) => {
      state.byPriceFrom = action.payload;
    },
    filterByPriceTo: (state, action: PayloadAction<number>) => {
      state.byPriceTo = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string[]>) => {
      state.byCategory = action.payload;
    },
    filterByRatingFrom: (state, action: PayloadAction<number>) => {
      state.byRatingFrom = action.payload;
    },
    filterByRatingTo: (state, action: PayloadAction<number>) => {
      state.byRatingTo = action.payload;
    },
  },
});

export const { filterByPriceFrom, filterByPriceTo, filterByCategory, filterByRatingFrom, filterByRatingTo } =
  filterForCatalogSlice.actions;

export default filterForCatalogSlice.reducer;
