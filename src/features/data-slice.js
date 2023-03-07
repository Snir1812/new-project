import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      productName: "Collar H.S 70mm",
      productPrice: "70 ₪",
    },
    {
      id: 2,
      productName: "Collar H.S 60mm",
      productPrice: "60 ₪",
    },
    {
      id: 3,
      productName: "Collar H.S 50mm",
      productPrice: "50 ₪",
    },
    {
      id: 4,
      productName: "Collar H.S 40mm",
      productPrice: "40 ₪",
    },
    {
      id: 5,
      productName: "Collar H.S 30mm",
      productPrice: "30 ₪",
    },
    {
      id: 6,
      productName: "Collar H.S 20mm",
      category: 1,
      productPrice: "20 ₪",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
export const {} = dataSlice.actions;
