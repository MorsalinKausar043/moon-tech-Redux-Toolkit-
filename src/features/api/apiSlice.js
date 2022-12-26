import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "ProductAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moon-tech-backend-production.up.railway.app",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
}); 

export const {useGetProductsQuery} = productApi;