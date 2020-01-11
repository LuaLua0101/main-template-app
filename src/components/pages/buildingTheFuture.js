import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { SERVER } from "../../utils/constants";

const BuildingTheFuturePage = props => {
  const [careers, setCareers] = useState([]);
  const [loadButton, setLoadButton] = useState(true);

  const getData = () => {
    setLoadButton(true);
    const lang = localStorage.getItem("@lang")
      ? localStorage.getItem("@lang")
      : "vi";
    axios
      .get("buildings/" + lang)
      .then(res => {
        console.log(res.data);
        setCareers(res.data.buildings);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default BuildingTheFuturePage;
