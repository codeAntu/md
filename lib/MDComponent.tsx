import { useEffect, useState } from "react";
import { Token } from "./token/types";
import findComponents from "./token/findComponents";
import Exp from "./Render/ComponentRenderer";
import "./index.css";

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
