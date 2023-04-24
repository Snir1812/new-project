import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    showLoginForm: false,
    showPasswordRecoveryForm: false,
  },
  reducers: {
    openLoginForm: (state) => {
      state.showLoginForm = true;
    },
    closeLoginForm: (state) => {
      state.showLoginForm = false;
    },
    openPasswordRecoveryForm: (state) => {
      state.showPasswordRecoveryForm = true;
    },
    closePasswordRecoveryForm: (state) => {
      state.showPasswordRecoveryForm = false;
    },
  },
});

export default formSlice.reducer;
export const {
  openLoginForm,
  closeLoginForm,
  openPasswordRecoveryForm,
  closePasswordRecoveryForm,
} = formSlice.actions;
