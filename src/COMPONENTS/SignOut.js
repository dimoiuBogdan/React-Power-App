import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../STORE/auth-slice";

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const signOutHandler = () => {
    console.log(auth);
    dispatch(signOut(history, auth.userId));
  };

  return <button onClick={signOutHandler}>Sign Out</button>;
};

export default SignOut;
