import React from "react";
import DynamicImport from "../../utils/lazyImport";

const Detail = DynamicImport(() => import("../templates/notifyDetail"));

export default function NotifyPage(props) {
  return <Detail type={props.match.params.type} />;
}
