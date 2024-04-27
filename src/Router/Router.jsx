import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyCraftList from "../Pages/MyCraftList";
import AllCraft from "../Pages/AllCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allcraft",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "/mycraftlist",
        element: <MyCraftList></MyCraftList>,
      },
      {
        path: "/addcraft",
        element: <AddCraft></AddCraft>,
      },
    ],
  },
]);

export default router;
