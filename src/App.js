import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from "react";

const AuthPage = React.lazy(() => import("./PAGES/AuthPage"));

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
            <div className="container mx-auto"></div>
          </Switch>
        </div>
        <Redirect exact from="/" to="/sign-in" />
      </Suspense>
    </Router>
  );
};

export default App;
