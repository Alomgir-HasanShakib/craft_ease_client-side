import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav/Navbar";

const Root = () => {
  return (
    <div >
      <div className=" max-w-7xl mx-auto min-h-[calc(100vh)]">
      <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="mt-16">

      <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
