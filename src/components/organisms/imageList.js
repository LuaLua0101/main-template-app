import React, { useState } from "react";
import ImageBox from "../molecules/imageBox";

export default function ImageList(props) {
  const [list, setList] = useState([
    {
      id: 1,
      title: "title 1",
      url: "124.jpg",
      time: "5 phut truoc"
    }
  ]);
  return list.map((item, index) => {
    return <ImageBox key={index} data={item} />;
  });
}
