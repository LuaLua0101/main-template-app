import React from "react";
import detectmob from "../../utils/detectMobile";
import DynamicImport from "../../utils/lazyImport";

const MLeftContent = DynamicImport(() =>
  import("../templates/mobileLeftContent")
);
const LeftContent = DynamicImport(() => import("../templates/leftContent"));

export default function MainPage(props) {
  return detectmob() ? <MLeftContent /> : <LeftContent />;
}
