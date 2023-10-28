import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slice';

export const postDetailsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: contactReducer,
});
