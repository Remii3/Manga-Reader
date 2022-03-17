import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../features/favoriteSlice";
const store = configureStore({
  reducer: {
    favoriteSlice: favoriteSlice,
  },
});

export default store;
