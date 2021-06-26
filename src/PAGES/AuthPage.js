import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "../COMPONENTS/AuthModal";
import { authActions, signOut } from "../STORE/auth-slice";
import { useHistory } from "react-router";

const AuthPage = ({ signUpInterface }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  const clearNotificationMessage = () => {
    auth.message.content &&
      dispatch(authActions.setCustomMessage({ type: "", content: "" }));
  };

  const signUserOut = () => {
    dispatch(signOut(history));
  };

  useEffect(() => {
    signUserOut();
    clearNotificationMessage();
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
