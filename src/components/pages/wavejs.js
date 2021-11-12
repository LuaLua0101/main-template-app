import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Wave from "@foobar404/wave";
import audioFile from "./audio.mp3";
import { Button, Card , Input} from "antd";
import useFormInput from "../../utils/useFormInput";

const Audio = forwardRef((props, ref) => {
  let [wave1] = useState(new Wave());
  let [wave2] = useState(new Wave());

  const innerRef = useRef();

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      innerRef.current.play();
    },
  }));

  useEffect(() => {
    wave1.fromElement("audio_element_id", "canvas_id_1", {
      type: "shockwave",
      colors: ["#07e0ff", "#03e7e9", "#27646f"],
    });
    wave2.fromElement("audio_element_id", "canvas_id_2", {
      type: "flower",
      colors: ["#07e0ff"],
    });
    console.log(ref);
  }, []);

  return (
    <div style={{ backgroundColor: "#413641" }}>
      <audio controls id="audio_element_id" src={audioFile} ref={innerRef} hidden>
        Your browser does not support the audio tag.
      </audio>
      <canvas id="canvas_id_1" height={200} width={600}></canvas>
      <canvas id="canvas_id_2" height={200} width={200}></canvas>
    </div>
  );
});

const AudioPlayer = () => {
  const [data, setData] = useState();
  const text = useFormInput("");
  const audioRef = useRef();

  return (
    <>
      <Card hoverable style={{ margin: 50 }}>
        <Audio text={text} ref={audioRef} />
      </Card>
      <Card hoverable style={{ margin: 50 }}>
        <Input {...text} />
        {text.value}
        <Button type="primary" onClick={() => audioRef.current.playAudio()}>
          Play
        </Button>
        <Button type="danger">Pause</Button>
      </Card>
    </>
  );
};
export default AudioPlayer;
