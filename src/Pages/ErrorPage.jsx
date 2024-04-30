import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl">
      <img src="https://i.postimg.cc/431yzbRj/image.jpg" alt="" />
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn bg-yellow-400 hover:text-lighten hover:bg-primary  px-10 text-xl font-medium">
            Go Home
          </button>
        </Link>
      </div>{" "}
    </div>
  );
};

export default ErrorPage;
