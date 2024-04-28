import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Authentication/Authentication";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, loader, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => toast.success("Log out successfull "));
  };
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

      {user && (
        <ul className="flex">
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
        </ul>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 ">
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
                <button className="btn mr-5 bg-btn text-white font-bold ">
                  Log In
                </button>
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
        {loader ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          !user && (
            <div className="navbar-end">
              <Link to="/login">
                <button className="btn mr-5 bg-btn text-white font-bold hidden lg:flex">
                  Log In
                </button>
              </Link>
              <Link to="/registration">
                <button className="btn bg-btn text-white font-bold">
                  Registration
                </button>
              </Link>
            </div>
          )
        )}
        {user && (
          <div className="navbar-end">
            <div className="avatar">
              <button className="w-10 mr-2 tooltip rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" data-tip={user.displayName}>
                <img className="rounded-full ring" src={user.photoURL}  />
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-btn text-white font-bold"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
