import React from "react";
import Typography from "@material-ui/core/Typography";

const TypoGreenH5 = props => {
  return (
    <Typography
      variant="h5"
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#44cbdf",
        backgroundImage: "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
        color: "#fbfefe",
        boxShadow: "none",
        borderRadius: 0
      }}
    >
      {props.text}
    </Typography>
  );
};

export default TypoGreenH5;
