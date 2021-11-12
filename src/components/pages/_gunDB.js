import React, { useState } from "react";
import { useGun } from "gun-react";
import Gun from "gun";

var gun = Gun("http://localhost:8080/gun");
var chat = gun.get("chat");
var myArray = [1, 2, 45, 67];
let config = {
  peers: ["http://localhost:8080/gun"],
  s3: {
    key: "",
    secret: "",
    bucket: "",
  },
  // simple JSON persistence (bundled)
  // meant for ease of getting started
  // NOT meant for production
  //   file: "file/path.json",

  // set your own UUID function
  uuid: () => {},
};

function array2object(arr) {
  var obj = {};
  Gun.list.map(arr, function (v, f, t) {
    if (Gun.list.is(v) || Gun.obj.is(v)) {
      obj[f] = array2object(v);
      return;
    }
    obj[f] = v;
  });
  return obj;
}

const formatData = (todos) =>
  Object.keys(todos)
    .map((key) => ({ key, val: todos[key] }))
    .filter((t) => Boolean(t.val) && t.key !== "_");

const App = ({ gunService }) => {
  const [firstName, setFirstName] = useState("");
  const [names, setNames] = useState([]);

  React.useEffect(() => {
    if (chat) {
      chat.on((data, key) => {
        console.log("previously saved data", formatData(data));
      });

      chat.map().once(item => {
        console.log('item', item)
      })
    }
  }, []);

  const submitValue = (e) => {
    e.preventDefault();
    const formDetails = {
      FirstName: firstName,
    };
    chat.put(formDetails);
  };

  return (
    <div>
      <label>Firstname</label>
      <input
        id="textinput"
        name="firstname"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        type="text"
      ></input>
      <br />

      <button onClick={submitValue} class="btn btn-success">
        Ok
      </button>
      <ul>
        {names.map((todo) => (
          <li key={todo.key}>{todo.val}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
