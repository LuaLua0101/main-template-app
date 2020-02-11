import React from "react";
import { GlobalStateProvider } from "./Store";
import RouteMap from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <RouteMap />
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
