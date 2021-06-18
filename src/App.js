import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

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
        <Switch></Switch>
      </Suspense>
    </Router>
  );
};

export default App;
