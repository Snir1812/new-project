import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    showForm: true,
  },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
      console.log(state.showForm);
    },
  },
});

export default formSlice.reducer;
export const { toggleForm } = formSlice.actions;
