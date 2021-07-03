import React, { useEffect, useState } from "react";
import Wave from "@foobar404/wave";
import audioFile from "./audio.mp3";
const LMS = () => {
  let [wave1] = useState(new Wave());
  let [wave2] = useState(new Wave());

  useEffect(() => {
    wave1.fromElement("audio_element_id", "canvas_id_1", {
      type: "shockwave",
      colors: ["#00fdff", "#03e7e9", "#27646f"],
    });
    wave2.fromElement("audio_element_id", "canvas_id_2", {
      type: "flower",
      colors: ["#00fdff"],
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#413641" }}>
      <audio controls id="audio_element_id" src={audioFile}>
        Your browser does not support the audio tag.
      </audio>
      <canvas id="canvas_id_1" height={200} width={600}></canvas>
      <canvas id="canvas_id_2" height={200} width={200}></canvas>
    </div>
  );
};

export default LMS;
