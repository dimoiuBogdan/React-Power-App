import { useHistory } from "react-router-dom";
import { signOut } from "../STORE/auth-slice";
import { useDispatch } from "react-redux";

const WorkoutsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutHandler = () => {
    dispatch(signOut(history));
  };

  return <button onClick={signOutHandler}>Sign Out</button>;
};

export default WorkoutsPage;
