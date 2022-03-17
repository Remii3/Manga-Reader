import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "auth",
  initialState: { favoriteList: false },
  reducers: {
    addFavorite(state, action) {},
  },
});

export default favoriteSlice.reducer;

export const favoriteSliceActions = favoriteSlice.actions;
