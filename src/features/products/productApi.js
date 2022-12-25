import axios from "../../utils/axios.config";

// get product api
export const getProduct = async () => {
  const apiData = await axios.get("/products");
  return apiData.data;
};

// post product api
export const postProduct = async (productData) => {
    await axios.post("products/add", productData);
};
// post product api
export const deleteProduct = async (id) => {
    await axios.delete(`products/${id}`)
};
