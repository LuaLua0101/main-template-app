import React from "react";
import { GlobalStateProvider } from "./Store";
// import "./utils/firebase";
import RouteMap from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";
import "antd/dist/antd.css";

const Menu = DynamicImport(() => import("./Menu"));
const Footer = DynamicImport(() => import("./Footer"));

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        {/* <Menu /> */}
        <RouteMap />
        {/* <Footer /> */}
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
