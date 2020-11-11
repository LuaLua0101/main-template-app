import React from "react"
import { Route, Switch } from "react-router-dom"
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
const RouteMap = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/comic/:id" component={MainPage} />
      <Route exact path="/streaming" component={StreamingPage} />
      <Route exact path="/capturing-video" component={CapturingPage} />
      <Route exact path="/excel" component={ExcelPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/deck" component={DeckPage} />
    </Switch>
  )
}

export default RouteMap
