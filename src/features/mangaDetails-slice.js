import { createSlice } from "@reduxjs/toolkit";

const initialState = { mangaData: null, mangaChapters: null };

const mangaDetailsSlice = createSlice({
  name: "mangaDetails",
  initialState: initialState,
  reducers: {
    showMangaDetails(state, action) {
      console.log(action.payload);
      state.mangaData = action.payload.mangaData;
      state.mangaChapters = action.payload.mangaChapters;
    },
  },
});
export default mangaDetailsSlice.reducer;

export const mangaDetailsSliceActions = mangaDetailsSlice.actions;
