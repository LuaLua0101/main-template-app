import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DynamicImport from "./utils/lazyImport"

const MainPage = DynamicImport(() => import("./components/pages/main"))
const StreamingPage = DynamicImport(() =>
  import("./components/pages/streaming")
)
const CapturingPage = DynamicImport(() =>
  import("./components/pages/captureVideo")
)
const ExcelPage = DynamicImport(() =>
  import("./components/pages/excel")
)
const LoginPage = DynamicImport(() =>
  import("./components/pages/signIn")
)
const DeckPage = DynamicImport(() =>
  import("./components/pages/card")
)
const PlotlyPage = DynamicImport(() =>
  import("./components/pages/plot")
)
const VisChartPage = DynamicImport(() =>
  import("./components/pages/visChart")
)
const VictoryChartPage = DynamicImport(() =>
  import("./components/pages/victoryChart")
)
const FacebookPage = DynamicImport(() =>
  import("./components/pages/facebook")
)
const Page404 = DynamicImport(() =>
  import("./components/pages/404")
)

const RouteMap = () =>(
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
      <Route path="/vis-chart" component={VisChartPage} />
      <Route path="/vic-chart" component={VictoryChartPage} />
      <Route path="/facebook" component={FacebookPage} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default RouteMap
