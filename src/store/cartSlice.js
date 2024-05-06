// src/store/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  formData: {}, // Add formData field to initial state
  tempArr: [],
  devliveryCharges: 3,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index] = action.payload;
      }
    },

    updateFormData: (state, action) => {
      state.formData = action.payload;
    },

    addToTempArr: (state, action) => {
      state.tempArr.push(action.payload);
    },
    clearTempArr: (state) => {
      state.tempArr = []; // Clear tempArr by setting it to an empty array
    },
    updateDeliveryCharges: (state, action) => {
      state.devliveryCharges = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  updateFormData,
  addToTempArr,
  clearTempArr,
  updateDeliveryCharges,
} = cartSlice.actions;

export default cartSlice.reducer;
