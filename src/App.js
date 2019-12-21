import React from "react";
import { GlobalStateProvider } from "./Store";
import "./utils/firebase";
import RouteMap from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";

const LoginPage = DynamicImport(() => import("./components/pages/login"));
const Menu = DynamicImport(() => import("./Menu"));
const Footer = DynamicImport(() => import("./Footer"));

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        {localStorage.getItem("@token") ? (
          <>
            <Menu />
            <RouteMap />
            <Footer />
          </>
        ) : (
          <LoginPage />
        )}
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
