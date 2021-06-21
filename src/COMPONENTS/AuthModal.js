import { useState } from "react";
import { NavLink } from "react-router-dom";

const AuthModal = ({ signUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="shadow-md rounded-md max-w-xl w-full sm:py-16 sm:px-10 py-12 px-6  bg-black bg-opacity-40 text-white font-medium backdrop-filter backdrop-blur-lg">
      <div className="flex items-center mb-14 text-gray-400 text-2xl">
        <NavLink activeClassName="text-white" to="/sign-in">
          <h3 className="transition-all hover:text-red-400">LogIn</h3>
        </NavLink>
        <h3 className="mx-3 text-xl">|</h3>
        <NavLink activeClassName="text-white" to="/sign-up">
          <h3 className="transition-all hover:text-red-400">Sign Up</h3>
        </NavLink>
      </div>
      <form>
        <div className="mb-8">
          <p className="text-gray-200 mb-2 text-lg">E-Mail</p>
          <input
            className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
            placeholder="Enter your e-mail..."
            id="email"
            type="email"
          />
        </div>
        <p className="text-gray-200 mb-2 text-lg">Password</p>
        <div className="relative">
          <input
            className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password..."
          />
          <i
            onClick={toggleShowPassword}
            className={`fas fa-eye${
              showPassword ? "-slash" : ""
            } absolute top-1/2 transform -translate-y-1/2 right-5 text-xl cursor-pointer text-gray-300`}
          ></i>
        </div>
        {signUp && (
          <div>
            <p className="text-gray-200 mb-2 mt-8 text-lg">Confirm Password</p>
            <div className="relative">
              <input
                className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password..."
              />
              <i
                onClick={toggleShowPassword}
                className={`fas fa-eye${
                  showPassword ? "-slash" : ""
                } absolute top-1/2 transform -translate-y-1/2 right-5 text-xl cursor-pointer text-gray-300`}
              ></i>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full text-xl py-2 font-medium from-red-500 bg-gradient-to-r to-red-900 rounded-md mt-12"
        >
          {signUp ? "Sign Up" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default AuthModal;
