import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    showLoginForm: false,
    showPasswordRecoveryForm: false,
    showSignupForm: false,
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
    openSignupForm: (state) => {
      state.showSignupForm = true;
    },
    closeSignupForm: (state) => {
      state.showSignupForm = false;
    },
  },
});

export default formSlice.reducer;
export const {
  openLoginForm,
  closeLoginForm,
  openPasswordRecoveryForm,
  closePasswordRecoveryForm,
  openSignupForm,
  closeSignupForm,
} = formSlice.actions;
