import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { signIn, signUp } from "../STORE/auth-slice";

const AuthModal = ({ signUpInterface }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const signUpHandler = (e) => {
    e.preventDefault();
    confirmPassword !== password
      ? alert("Passwords are not the same")
      : dispatch(signUp(email, password));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password, history));
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
      <form onSubmit={signUpInterface ? signUpHandler : loginHandler}>
        <div className="mb-8">
          <p className="text-gray-200 mb-2 text-lg">E-Mail</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
            placeholder="Enter your e-mail..."
            id="email"
            type="email"
          />
        </div>
        <p className="text-gray-200 mb-2 text-lg">Password</p>
        <div className="relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
            type="password"
            placeholder="Enter your password..."
          />
        </div>
        {signUpInterface && (
          <div>
            <p className="text-gray-200 mb-2 mt-8 text-lg">Confirm Password</p>
            <div className="relative">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-red-200 bg-opacity-40 rounded-sm p-2 text-lg font-medium text-white placeholder-gray-300"
                type="password"
                placeholder="Confirm your password..."
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full text-xl py-2 font-medium from-red-500 bg-gradient-to-r to-red-900 rounded-md mt-12"
        >
          {signUpInterface ? "Sign Up" : "Log In"}
        </button>
      </form>
      {auth.message.content && (
        <h3
          className={`text-center text-xl mt-6 ${
            auth.message.type === "error" ? "text-red-400" : "text-green-500"
          }`}
        >
          {auth.message.content}
        </h3>
      )}
    </div>
  );
};

export default AuthModal;
