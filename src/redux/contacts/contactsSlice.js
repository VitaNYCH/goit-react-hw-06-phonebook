import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContacts(state, action) {
      return [...state, action.payload];
    },
    removeContacts(state, action) {
      return state.filter(contacts => contacts.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsReducer.reducer
);

export const { addContacts, removeContacts } = contactsReducer.actions;

export const getContacts = state => state.contacts;
