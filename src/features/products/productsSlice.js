import { deleteProduct, getProduct, postProduct } from "./productApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  isLoading: false,
  error: false,
  postSuccess: false,
  errorMassage: "",
  deleteSuccess : false,
};

// get product data 
export const getProducts = createAsyncThunk("products/getProduct", () =>  getProduct()); 
// add product data 
export const postProductData = createAsyncThunk("products/postProduct", (data) =>  postProduct(data)); 
// remove product from list
export const removeProduct = createAsyncThunk("products/removeProduct",  async (id, thunkAPI) =>  {
  const products = await deleteProduct(id);
  thunkAPI.dispatch(removeFromList(id));
  return products;
}); 



// data post

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromList:(state,action) =>{
      state.products = state.products.filter(product => product._id !== action.payload);
    }
  },
  // api call
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.products = action.payload;
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.products = [];
      state.errorMassage = action.error.message;
    })
    builder.addCase(postProductData.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.postSuccess = false;
    })
    builder.addCase(postProductData.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.postSuccess = true;
    })
    builder.addCase(postProductData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.postSuccess = false;
      state.products = [];
      state.errorMassage = action.error.message;
    })
    builder.addCase(removeProduct.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.postSuccess = false;
      state.deleteSuccess = false;
    })
    builder.addCase(removeProduct.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.postSuccess = false;
      state.deleteSuccess = true;
    });
    builder.addCase(removeProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.postSuccess = false;
      state.products = [];
      state.errorMassage = action.error.message;
      state.deleteSuccess = false;
    });
  },
});

export const { addProduct, removeFromList } = ProductsSlice.actions;

export default ProductsSlice.reducer;
