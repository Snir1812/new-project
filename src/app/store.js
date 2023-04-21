import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data-slice";
import formReducer from "../features/form-slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    form: formReducer,
  },
});

export default store;
