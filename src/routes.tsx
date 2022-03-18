import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import HomePage from "./pages/Home";
import SinglePage from "./pages/HotelSingle";

const App = () => {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <SinglePage /> },
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