import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import MealDetails from "./Components/MealDetails/MealDetails";
import Ingredients from "./Components/Ingredients/Ingredients";
import NotFound from "./Components/NotFound/NotFound";
import Area from "./Components/Area/Area";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";
const queryClient = new QueryClient();

const R = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mealdetails/:mealId", element: <MealDetails /> },
      { path: "category/:meal", element: <Home /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "area", element: <Area /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={R}></RouterProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
