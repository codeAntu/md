import React from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("## Hello World");

  return (
    <>
      <div>Hello</div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default App;
