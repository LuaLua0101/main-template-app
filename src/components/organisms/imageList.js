import React, { useState } from "react";
import { Button } from "antd";
import ImageBox from "../molecules/imageBox";

const ImageList = props => {
  const [list, setList] = useState([
    {
      id: 1,
      title: "title 1",
      url: "124.jpg",
      time: "5 phut truoc"
    },
    {
      id: 1,
      title: "title 1",
      url: "124.jpg",
      time: "5 phut truoc"
    },
    {
      id: 1,
      title: "title 1",
      url: "124.jpg",
      time: "5 phut truoc"
    },
    {
      id: 1,
      title: "title 1",
      url: "124.jpg",
      time: "5 phut truoc"
    }
  ]);

  return (
    <>
      {list.map((item, index) => {
        return <ImageBox key={index} data={item} />;
      })}
      <Button style={{ margin: "auto" }} block>
        Default
      </Button>
    </>
  );
};

export default ImageList;
