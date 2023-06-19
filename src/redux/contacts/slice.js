import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacnts } from "./operations";

const contactsInitialState = { items: [], isLoading: false,  error: null};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [getContacnts.pending](state) {
      state.isLoading = true;
     },
    [getContacnts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
     },
    [getContacnts.rejected](state, action) {
      state.error = action.payload
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      console.log(action);
      state.items.push(action.payload)
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.error = action.payload
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const contactsReducer = contactsSlice.reducer;