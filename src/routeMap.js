import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicImport from "./utils/lazyImport";
import GunDBPage from './components/pages/gunDB'
import LeafMapPage from "./components/pages/leafLetMap"

const MainPage = DynamicImport(() => import("./components/pages/main"));
const StreamingPage = DynamicImport(() =>
  import("./components/pages/streaming")
);
const CapturingPage = DynamicImport(() =>
  import("./components/pages/captureVideo")
);
const ExcelPage = DynamicImport(() => import("./components/pages/excel"));
const LoginPage = DynamicImport(() => import("./components/pages/signIn"));
const DeckPage = DynamicImport(() => import("./components/pages/card"));
const PlotlyPage = DynamicImport(() => import("./components/pages/plot"));
const VisChartPage = DynamicImport(() => import("./components/pages/visChart"));
const VictoryChartPage = DynamicImport(() =>
  import("./components/pages/victoryChart")
);
const FacebookPage = DynamicImport(() => import("./components/pages/facebook"));
const SlideShowPage = DynamicImport(() =>
  import("./components/pages/slideshow")
);
const PdfViewerPage = DynamicImport(() =>
  import("./components/pages/pdfviewer")
);
const SCOViewerPage = DynamicImport(() =>
  import("./components/pages/scoviewer")
);
const WavejsPage = DynamicImport(() => import("./components/pages/wavejs"));
const LightWeightChartPage = DynamicImport(() =>
  import("./components/pages/lwChart")
);
const StockPage = DynamicImport(() => import("./components/pages/stock"));
const ReactQueryPage = DynamicImport(() =>
  import("./components/pages/reactQuery")
);
// const LeafMapPage = DynamicImport(() =>
//   import("./components/pages/leafLetMap")
// );
const GSheetPage = DynamicImport(() => import("./components/pages/gSheet"));
const Page404 = DynamicImport(() => import("./components/pages/404"));

const RouteMap = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/comic/:id" component={MainPage} />
      <Route path="/streaming" component={StreamingPage} />
      <Route path="/capturing-video" component={CapturingPage} />
      <Route path="/excel" component={ExcelPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/deck" component={DeckPage} />
      <Route path="/plot" component={PlotlyPage} />
      <Route path="/lw-chart" component={LightWeightChartPage} />
      <Route path="/vis-chart" component={VisChartPage} />
      <Route path="/vic-chart" component={VictoryChartPage} />
      <Route path="/facebook" component={FacebookPage} />
      <Route path="/slideshow" component={SlideShowPage} />
      <Route path="/pdf" component={PdfViewerPage} />
      <Route path="/sco" component={SCOViewerPage} />
      <Route path="/wavejs" component={WavejsPage} />
      <Route path="/stock" component={StockPage} />
      <Route path="/leaflet-map" component={LeafMapPage} />
      <Route path="/react-query" component={ReactQueryPage} />
      <Route path="/google-sheet" component={GSheetPage} />
      <Route path="/gun-db" component={GunDBPage} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

export default RouteMap;
