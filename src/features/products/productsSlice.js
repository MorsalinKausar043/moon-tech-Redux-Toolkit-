import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  error: false,
  errorMassage: "",
  products: [],
};

export const getProducts = createAsyncThunk("products/getProduct", async () => {
  try {
    const apiData = await axios.get("https://moon-tech-backend-production.up.railway.app/products");
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
});

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) =>{
        state.isLoading = true;
        state.error = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = false;
        state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) =>{
        state.isLoading = false;
        state.error = true;
        state.products = [];
        state.errorMassage = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
