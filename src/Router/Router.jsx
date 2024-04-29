import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyCraftList from "../Pages/MyCraftList";
import AllCraft from "../Pages/AllCraft";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import CraftDetails from "../Pages/CraftDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:500/addItem"),
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: '/craftdetails/:_id',
        element: <CraftDetails></CraftDetails>,
        loader: () => fetch("http://localhost:500/addItem")
      }
    ],
  },
]);

export default router;
