import React, { useState } from "react";
import Gun from "gun";

var gun = Gun("http://localhost:8080/gun");
var chat = gun.get("user");

const formatData = (todos) =>
  Object.keys(todos)
    .map((key) => ({ key, val: todos[key] }))
    .filter((t) => Boolean(t.val) && t.key !== "_");

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [names, setNames] = useState([]);

  React.useEffect(() => {
    if (chat) {
      chat.on((data, key) => {
        console.log("previously saved data", formatData(data));
      });

      // chat.map().once((item) => {
      //   console.log("item", item);
      // });
    }
  });

  const submitValue = (e) => {
    e.preventDefault();
    const formDetails = {
       firstName,
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
