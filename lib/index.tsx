import { useEffect, useState } from "react";
import "./index.css";
import findComponents from "./parser/findComponents";
import { Token } from "./parser/types";
import Exp from "./renderer/ComponentRenderer";

export default function MDComponent({ text }: { text?: string }) {
  const [component, setComponent] = useState([] as Token[]);

  useEffect(() => {
    if (!text) return;
    setComponent(findComponents(text));
  }, [text]);

  console.log(component);

  return (
    <>
      <Exp components={component} />
    </>
  );
}
