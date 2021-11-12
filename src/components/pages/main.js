import React, { useEffect } from "react";
import detectmob from "../../utils/detectMobile";
import DynamicImport from "../../utils/lazyImport";
import { getRemoteConfigParam } from "../../remoteConfig";
import { googleSignIn } from "../../googleAuth";
import { facebookSignIn } from "../../facebookAuth";

const MLeftContent = DynamicImport(() =>
  import("../templates/mobileLeftContent")
);
const LeftContent = DynamicImport(() => import("../templates/leftContent"));

export default function MainPage(props) {
  return (
    <>
      home
      <button onClick={() => getRemoteConfigParam("init_param")}>
        Click remote
      </button>
      <button onClick={googleSignIn}>Sign in with Google</button>
      <button onClick={facebookSignIn}>Sign in with Facebook</button>
    </>
  );
}
