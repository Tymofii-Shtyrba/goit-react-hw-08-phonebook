import { createSlice } from "@reduxjs/toolkit";

const filterInitalState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitalState,
  reducers: {
    setFilter(_, action) {
      return action.payload.toLowerCase();
    }
  }
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;