import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  // token: sessionStorage.getItem("token"),
  isLoading: false,
  isError: false,
  showLoginForm: false,
  showPasswordRecoveryForm: false,
  showSignupForm: false,
  showProductForm: false,
  productToEdit: null,
};

export const fetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(setIsLoading(true));

    fetch("https://localhost:7201/api/Products", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setItems(data));
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
        dispatch(setIsError(true));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
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
    updateItem: (state, action) => {
      const index = state.products.indexOf(state.productToEdit);
      if (index >= 0) {
        state.products[index] = action.payload;
      }
    },
    addItem: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    setProductForm: (state, action) => {
      state.productToEdit = null;
      state.showProductForm = action.payload;
    },
    toggleProductForm: (state) => {
      // return {
      //   ...state,
      //   productToEdit: null,
      //   showProductForm: !state.showProductForm,
      // };
      state.productToEdit = null;
      state.showProductForm = !state.showProductForm;
    },
    setProductToEdit: (state, action) => {
      state.productToEdit = action.payload;
      state.showProductForm = true;
    },
    removeItem: (state, action) => {
      const index = state.products.indexOf(action.payload);
      if (index >= 0) {
        state.products.splice(index, 1);
      }
    },
  },
});

export default slice.reducer;
export const {
  openLoginForm,
  closeLoginForm,
  openPasswordRecoveryForm,
  closePasswordRecoveryForm,
  openSignupForm,
  closeSignupForm,
  setItems,
  setIsLoading,
  setIsError,
  updateItem,
  addItem,
  setProductForm,
  toggleProductForm,
  setProductToEdit,
  showProductForm,
  productToEdit,
  removeItem,
} = slice.actions;
