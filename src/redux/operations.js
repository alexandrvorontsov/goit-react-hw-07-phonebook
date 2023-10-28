import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6537b8eda543859d1bb0b463.mockapi.io';

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestAddContact = createAsyncThunk(
  'contacts/requestAddContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts/', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContacts = createAsyncThunk(
  'contacts/requestDeleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
