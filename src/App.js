import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import PrivateRoute from "./COMPONENTS/PrivateRoute";

const AuthPage = React.lazy(() => import("./PAGES/AuthPage"));
const WorkoutsPage = React.lazy(() => import("./PAGES/WorkoutsPage"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center bg-black bg-opacity-80 text-center text-4xl text-red-400 font-bold">
            Loading...
          </div>
        }
      >
        <div className="w-full min-h-screen">
          <Switch>
            <Route path="/sign-in" component={() => <AuthPage />} />
            <Route
              path="/sign-up"
              component={() => <AuthPage signUpInterface />}
            />
            <PrivateRoute>
              <Route path="/workouts" component={() => <WorkoutsPage />} />
            </PrivateRoute>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
