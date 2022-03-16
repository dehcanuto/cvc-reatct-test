import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import HomePage from "./pages/Home";

const App = () => {
  return useRoutes([
    { path: "/", element: <HomePage /> },
  ]);
};

const Routes = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Routes;