import React from "react";
import Loadable from "react-loadable";

const LoadingComponent = () => <>loading</>;

const DynamicImport = LoaderComponent =>
  Loadable({
    loader: LoaderComponent,
    loading: LoadingComponent
  });

export default DynamicImport;
