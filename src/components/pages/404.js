import React from "react";

const NotFound = props => {
  return (
    <img src={window.location.origin + "/404.png"} style={{ width: 500 }} />
  );
};

export default NotFound;
