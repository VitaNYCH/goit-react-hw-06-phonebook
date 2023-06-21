import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { filterReducer } from './filter/filterSlice';
import { contactsPersistReducer } from 'redux/contacts/contactsSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    // contacts: rootReducer,
    contacts: contactsPersistReducer,
    filter: filterReducer.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const rootReducer = combineReducers({
//   contacts: contactsReducer.reducer,
//   filter: filterReducer.reducer,
// });

// export const contactsPersistReducer = persistReducer(
//   persistConfig,
//   rootReducer
// );
