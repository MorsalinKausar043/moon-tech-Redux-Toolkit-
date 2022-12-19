import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import About from "../pages/main/About";
import Cart from "../pages/main/Cart";
import Home from "../pages/main/Home";
import TopRated from "../pages/main/TopRated";
import Dashboard from "../layout/dashboard/Dashboard";
import AddProduct from "../pages/dashboard/AddProduct";
import ProductList from "../pages/dashboard/ProductList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
