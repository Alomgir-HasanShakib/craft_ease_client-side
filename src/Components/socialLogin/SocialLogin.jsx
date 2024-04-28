import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../../Context/Authentication/Authentication";

import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, gitLogin } = useContext(AuthContext);

  // google login functionality
  const location = useLocation();
  const navigate = useNavigate();
  const gogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Successfully Login!");

          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => toast.error("Login Error!"));
  };
  // github login functionality

  const gitHubLogin = () => {
    gitLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Successfully Login!");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => toast.error("Login Error!"));
  };

  return (
    <div className="mt-8">
      <div className="divider"> Continue With</div>
      <div className="mt-8 flex justify-around">
        <button
          onClick={gogleLogin}
          className="btn bg-primary text-lighten px-5 text-xl"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button
          onClick={gitHubLogin}
          className="btn bg-primary text-lighten px-5 text-xl"
        >
          <FaGithub></FaGithub>
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SocialLogin;
