import React from "react";
import { useState } from "react";
import MDComponent from "../lib/index";
function App() {
  const [text, setText] = useState("## Hello World");

  return (
    <>
      <div>Hello</div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <MDComponent text={text} />
    </>
  );
}

export default App;