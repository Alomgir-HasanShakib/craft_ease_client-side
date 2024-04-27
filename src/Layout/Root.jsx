import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav/Navbar";

const Root = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="h-100vh">

      <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
