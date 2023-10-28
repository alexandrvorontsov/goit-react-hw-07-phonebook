import { createSlice } from '@reduxjs/toolkit';
import {
  requestContacts,
  requestAddContact,
  requestDeleteContacts,
} from './operations';

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  nameData: '',
  numberData: '',
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_STATE,
  extraReducers: {
    [requestContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [requestContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [requestContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [requestAddContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [requestAddContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [requestAddContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [requestDeleteContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [requestDeleteContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [requestDeleteContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
    setNameData: (state, action) => {
      state.nameData = action.payload;
    },
    setNumberData: (state, action) => {
      state.numberData = action.payload;
    },
  },
});
export const { filterContact } = phoneBookSlice.actions;
export const { setNameData } = phoneBookSlice.actions;
export const { setNumberData } = phoneBookSlice.actions;
export const contactReducer = phoneBookSlice.reducer;
