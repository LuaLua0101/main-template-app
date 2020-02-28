import React, { useState, useEffect } from "react";
import { Button } from "antd";
import ImageBox from "../molecules/imageBox";
import axios from "../../utils/axios";

const ImageList = props => {
  const [list, setList] = useState(null);

  useEffect(() => {
    axios.get("comics").then(res => {
      setList(res.data.comics);
    });
  }, []);

  return (
    <>
      {list &&
        list.map((item, index) => {
          return <ImageBox key={index} data={item} />;
        })}
      {/* <Button style={{ margin: "auto" }} block>
        Default
      </Button> */}
    </>
  );
};

export default ImageList;
