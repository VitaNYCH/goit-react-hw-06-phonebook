import { createSlice } from '@reduxjs/toolkit';

export const filterReducer = createSlice({
  name: 'filteredInfo',
  initialState: '',
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const { filterContacts } = filterReducer.actions;

export const getFilter = state => state.filterInfo;
