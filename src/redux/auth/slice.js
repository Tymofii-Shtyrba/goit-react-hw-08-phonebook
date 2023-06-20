import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshed: false,
  error: null,

};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, action) {
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
      state.error = null;
    },
    [login.fulfilled](state, action) {
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
      state.error = null;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshed = true;
    },
    [refresh.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.isRefreshed = true;
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
