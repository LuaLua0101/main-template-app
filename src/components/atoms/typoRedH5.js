import React from "react";
import Typography from "@material-ui/core/Typography";

const TypoRedH5 = props => {
  return (
    <Typography
      variant="h5"
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#fbfefe",
        backgroundImage:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        color: "#fbfefe",
        boxShadow: "none",
        borderRadius: 0
      }}
    >
      {props.text}
    </Typography>
  );
};

export default TypoRedH5;
