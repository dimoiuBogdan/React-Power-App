import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../STORE/auth-slice";

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const signOutHandler = () => {
    dispatch(signOut(history, auth.userId));
  };

  return (
    <button
      className="bg-red-400 px-3 rounded-md shadow-md transition-all hover:bg-red-500 hover:scale-105 transform"
      onClick={signOutHandler}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
