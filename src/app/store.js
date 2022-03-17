import { configureStore } from "@reduxjs/toolkit";
import mangaDetailsSlice from "../features/mangaDetails-slice";

const store = configureStore({
  reducer: {
    mangaDetails: mangaDetailsSlice,
  },
});

export default store;
