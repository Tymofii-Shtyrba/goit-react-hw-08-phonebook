import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacnts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const responce = await axios('/contacts');
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
 
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const responce = await axios.post('/contacts', contact);
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const responce = await axios.delete(`/contacts/${id}`);
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async ({ id, name, number }, thunkAPI) => {
  try {
    const responce = await axios.patch(`/contacts/${id}`, { name, number });
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});