import React from "react";
import { Route, Switch } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";

const MainPage = DynamicImport(() => import("./components/pages/main"));

const RouteMap = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};

export default RouteMap;
