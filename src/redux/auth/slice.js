import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,

};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [refresh.pending](state) {
      state.isLoading = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refresh.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.error = action.payload;
    }
  },
});

export const authReducer = authSlice.reducer;
