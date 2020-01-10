import React from "react";
import { Route, Switch } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";

import TeachmeDetail from "./admin_components/pages/teach-me-series/detail";

const MainPage = DynamicImport(() => import("./components/pages/main"));
const NotFoundPage = DynamicImport(() => import("./components/pages/404"));
const ApplicationPage = DynamicImport(() =>
  import("./components/pages/application")
);
const BuildingPage = DynamicImport(() => import("./components/pages/building"));
const CareerPage = DynamicImport(() => import("./components/pages/career"));
const IotHubPage = DynamicImport(() => import("./components/pages/iotHub"));
const ManualPage = DynamicImport(() => import("./components/pages/manuals"));
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
const IotHubDetailPage = DynamicImport(() =>
  import("./components/pages/iotHubDetail")
);
//===================ADMIN======================================================
const LoginPage = DynamicImport(() => import("./components/pages/login"));
const AdminTemplate = DynamicImport(() =>
  import("./admin_components/pages/main")
);

const TeachmeList = DynamicImport(() =>
  import("./admin_components/pages/teach-me-series/list")
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
      <Route exact path="/teach-me-serie" component={TeachMeSeriesDetailPage} />
      <Route exact path="/iot-hubs" component={IotHubPage} />
      <Route exact path="/iot-hub" component={IotHubDetailPage} />
      <Route exact path="/career" component={CareerPage} />
      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/teachme-list">
        <AdminTemplate child={<TeachmeList />} />
      </Route>
      <Route exact path="/teachme-add">
        <AdminTemplate child={<TeachmeDetail add />} />
      </Route>
      <Route exact path="/teachme-update">
        <AdminTemplate child={<TeachmeDetail update />} />
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default RouteMap;
