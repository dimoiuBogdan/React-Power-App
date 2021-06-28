import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from "react";
import PrivateRoute from "./COMPONENTS/PrivateRoute";
import Navbar from "./COMPONENTS/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./STORE/auth-slice";

const AuthPage = React.lazy(() => import("./PAGES/AuthPage"));
const WorkoutsPage = React.lazy(() => import("./PAGES/WorkoutsPage"));

const App = () => {
  const [checkedForData, setCheckedForData] = useState(false);
  const dispatch = useDispatch();

  const signInFromLocalStorage = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    localStorageData &&
      dispatch(authActions.assignUserId(localStorageData.uid));
  };

  useEffect(() => {
    signInFromLocalStorage().then(() => {
      setCheckedForData((prev) => !prev);
    });
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center min-h-screen justify-center bg-black bg-opacity-80 text-center text-4xl text-red-400 font-bold">
            Loading...
          </div>
        }
      >
        {checkedForData && (
          <div
            className="w-full overflow-hidden min-h-screen relative"
            id="main-bg"
          >
            <Switch>
              <Route path="/sign-in" component={() => <AuthPage />} />
              <Route
                path="/sign-up"
                component={() => <AuthPage signUpInterface />}
              />
              <PrivateRoute>
                <Navbar />
                <Redirect from="/" exact to="/workouts" />
                <Route path="/workouts" component={() => <WorkoutsPage />} />
              </PrivateRoute>
            </Switch>
          </div>
        )}
      </Suspense>
    </Router>
  );
};

export default App;
