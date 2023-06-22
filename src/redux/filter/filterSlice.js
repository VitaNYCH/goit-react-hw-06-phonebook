import { createSlice } from '@reduxjs/toolkit';

export const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const { filterContacts } = filterReducer.actions;

export const getFilter = state => state.filter;
