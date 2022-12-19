import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stock: false,
  brands: [],
  keyword: "",
};

const filterSlise = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle_Stock: (state) => {
      state.stock = !state.stock;
    },
    toggle_Brand: (state, action) => {
      if (!state.brands.includes(action.payload)) {
        state.brands.push(action.payload);
      } else {
        state.brands = state.brands.filter(
          (brands) => brands !== action.payload
        );
      }
    },
  },
});

export const { toggle_Stock, toggle_Brand } = filterSlise.actions;

export default filterSlise.reducer;
