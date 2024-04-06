import { createSlice } from '@reduxjs/toolkit';

export const filterForCatalogSlice = createSlice({
  name: 'filterForCatalog',
  initialState: {
    byPriceFrom: 0,
    byPriceTo: 2000,
    byCategory: [],
    byRatingFrom: 0,
    byRatingTo: 5,
  },
  reducers: {
    filterByPriceFrom: (state, action) => {
      state.byPriceFrom = action.payload;
    },
    filterByPriceTo: (state, action) => {
      state.byPriceTo = action.payload;
    },
    filterByCategory: (state, action) => {
      state.byCategory = action.payload;
    },
    filterByRatingFrom: (state, action) => {
      state.byRatingFrom = action.payload;
    },
    filterByRatingTo: (state, action) => {
      state.byRatingTo = action.payload;
    },
  },
});

export const { filterByPriceFrom, filterByPriceTo, filterByCategory, filterByRatingFrom, filterByRatingTo } =
  filterForCatalogSlice.actions;

export default filterForCatalogSlice.reducer;
