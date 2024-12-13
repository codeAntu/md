# Md compiler

![GitHub release (with filter)](https://img.shields.io/github/v/release/codeantu/md?Md_compiler)
[![npm version](https://badge.fury.io/js/%40codeantu%2Fmd.svg)](https://badge.fury.io/js/%40codeantu%2Fmd)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


![MD Compiler](https://codeantu.github.io/md/public/MDCompiler.svg)

This is a simple markdown compiler that takes a markdown file as input and outputs an React component that can be used to render the markdown.

# [Live Demo](https://mdcompiler.vercel.app/)

## Getting Started

### Installation

```bash
  npm install @codeantu/md
```

### Usage

```javascript
import React from "react";
import { useState } from "react";
import MDComponent from "@codeantu/md";

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

<br>

## Supported Markdown Syntax

- Heading : `# Hello World - ###### Hello World`

- Bold : `**Hello World**`

- Italic : `*Hello World*`

- Link : `[Hello World](https://www.google.com)`

- Image : `![Hello World](https://www.google.com)`

- Strike : `~~Hello World~~`

- Blockquote : `> Hello World`

- List : `* Hello World`

- Code : ` ``` console.log("Hello World") ``` `

- Code block : `` `javascript console.log("Hello World")` ``

- Horizontal Rule : `---`

- Image : `![Hello World](https://www.google.com)`

- ul : `* Hello World`

- ol : `1. Hello World`

- li : `- Hello World`

- hr : `---`

- paragraph : `Hello World`

- span : `<span>Hello World</span>`
