// import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filters/filterSlice";
import productsSlice from "../features/products/productsSlice";
import { productApi } from "../features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
