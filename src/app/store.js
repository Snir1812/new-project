import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data-slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
