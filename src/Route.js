import React from "react";
import { Route, Switch } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";

const MainPage = DynamicImport(() => import("./components/pages/main"));
const NotFoundPage = DynamicImport(() => import("./components/pages/404"));
const ApplicationPage = DynamicImport(() =>
  import("./components/pages/application")
);
const BuildingPage = DynamicImport(() => import("./components/pages/building"));
const CareerPage = DynamicImport(() => import("./components/pages/career"));
const IotHubPage = DynamicImport(() => import("./components/pages/iotHub"));
const ManualPage = DynamicImport(() => import("./components/pages/manual"));
const PressResourcesPage = DynamicImport(() =>
  import("./components/pages/pressResources")
);
const RelatedProductsPage = DynamicImport(() =>
  import("./components/pages/relatedProducts")
);
const TeachMeSeriesPage = DynamicImport(() =>
  import("./components/pages/teachMeSeries")
);
const TeachMeSeriesDetailPage = DynamicImport(() =>
  import("./components/pages/teachMeSeriesDetail")
);

const RouteMap = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/application" component={ApplicationPage} />
      <Route exact path="/building" component={BuildingPage} />
      <Route exact path="/manuals" component={ManualPage} />
      <Route exact path="/press-resources" component={PressResourcesPage} />
      <Route exact path="/related-products" component={RelatedProductsPage} />
      <Route exact path="/teach-me-series" component={TeachMeSeriesPage} />
      <Route
        exact
        path="/teach-me-series/:id"
        component={TeachMeSeriesDetailPage}
      />
      <Route exact path="/iot-hub" component={IotHubPage} />
      <Route exact path="/career" component={CareerPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default RouteMap;
