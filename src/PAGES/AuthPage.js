import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthModal from "../COMPONENTS/AuthModal";
import { authActions } from "../STORE/auth-slice";

const AuthPage = ({ signUpInterface }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.clearMessage());
  }, []);

  return (
    <div
      id="auth-page"
      className="bg-cover bg-center w-full h-screen bg-red-200 flex items-center justify-center px-2 sm:px-0"
    >
      <AuthModal signUpInterface={signUpInterface} />
    </div>
  );
};

export default AuthPage;
