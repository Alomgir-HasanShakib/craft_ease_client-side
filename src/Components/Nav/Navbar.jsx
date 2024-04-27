import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="text-[18px] font-semibold">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold">
        <NavLink
          to="/allcraft"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          All Art & craft Items
        </NavLink>
      </li>

      <li className="text-[18px] font-semibold">
        <NavLink
          to="/addcraft"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Add Craft Item
        </NavLink>
      </li>

      <li className="text-[18px] font-semibold">
        <NavLink
          to="/mycraftlist"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
              <Link to="/login">
            <a className="btn mr-5 bg-btn text-white font-bold ">Log In</a>
          </Link>
            </ul>
          </div>
          <img
            className="w-24 md:w-56"
            src="https://i.postimg.cc/nLg7k5Zw/logo.png"
            alt=""
          />{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn mr-5 bg-btn text-white font-bold hidden lg:flex">Log In</a>
          </Link>
          <Link to="/registration">
            <a className="btn bg-btn text-white font-bold">Registration</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
