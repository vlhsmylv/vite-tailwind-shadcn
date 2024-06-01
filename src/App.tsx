import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
