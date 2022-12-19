import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./App/store";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Routes} />
      </Provider>
    </>
  );
}

export default App;
