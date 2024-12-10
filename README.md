## md compiler

This is a simple markdown compiler that takes a markdown file as input and outputs an html file.

## Usage

```bash
  npm install @codeantu/md
```


```javascript
import React from "react";
import { useState } from "react";
import MDComponent from "md/dist/MDComponent";

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

```
