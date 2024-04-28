import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";
import Authentication, {
  AuthContext,
} from "./Context/Authentication/Authentication";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authentication>
        <RouterProvider router={router} />
      </Authentication>
    </HelmetProvider>
  </React.StrictMode>
);
