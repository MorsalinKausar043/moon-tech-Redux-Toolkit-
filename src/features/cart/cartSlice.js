import { ToastSuccess } from "../../components/toast/Toast";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCard: (state, action) => {
      //   state.cart.push(action.payload);
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
      ToastSuccess("Added Cart");
    },
    RemoveFromCard: (state, action) => {
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart.push(product);
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
      }
      ToastSuccess("Removed Cart");
    },
  },
});

export const { AddToCard, RemoveFromCard } = cartSlice.actions;

export default cartSlice.reducer;
