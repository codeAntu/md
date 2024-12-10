import { Token } from "../parser/types";

export default function Exp({ components }: { components: Token[] }) {
  if (components == undefined) return null;

  return (
    <>
      {components.map((component, index) => {
        switch (component.type) {
          case "text":
            return (
              <span key={index} className="custom-p">
                {component.value}
              </span>
            );
          case "bold":
            return (
              <b key={index} className="custom-strong">
                <Exp components={component.children!} />
              </b>
            );
          case "italic":
            return (
              <i key={index}>
                <Exp components={component.children!} />
              </i>
            );
          case "link":
            return (
              <a key={index} href={component.link} className="custom-a">
                {component.value}
                <Exp components={component.children!} />
              </a>
            );
          case "strike":
            return (
              <del key={index} className="custom-del">
                <Exp components={component.children!} />
              </del>
            );
          case "blockquote":
            return (
              <div key={index} className="custom-blockquote">
                {component.children ? (
                  <Exp components={component.children} />
                ) : null}
              </div>
            );
          case "code":
            return (
              <span key={index} className="custom-code">
                {component.value}
              </span>
            );
          case "codeblock":
            return (
              <p key={index} className="custom-codeblock">
                {component.value}
              </p>
            );
          case "hr":
            return <hr key={index} className="custom-hr" />;
          case "img":
            return (
              <img
                key={index}
                src={component.link}
                alt={component.value}
                className="custom-img"
              />
            );
          case "ul":
            return (
              <ul key={index} className="custom-ul">
                <Exp components={component.children!} />
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="custom-ol">
                <Exp components={component.children!} />
              </ol>
            );
          case "li":
            return (
              <li key={index} className="custom-li">
                <Exp components={component.children!} />
              </li>
            );
          case "paragraph":
            return (
              <p key={index} className="custom-paragraph">
                <Exp components={component.children!} />
              </p>
            );
          case "h1":
            return (
              <h1 key={index} className="custom-h1">
                <Exp components={component.children!} />
              </h1>
            );
          case "h2":
            return (
              <h2 key={index} className="custom-h2">
                <Exp components={component.children!} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="custom-h3">
                <Exp components={component.children!} />
              </h3>
            );
          case "h4":
            return (
              <h4 key={index} className="custom-h4">
                <Exp components={component.children!} />
              </h4>
            );
          case "h5":
            return (
              <h5 key={index} className="custom-h5">
                <Exp components={component.children!} />
              </h5>
            );
          case "h6":
            return (
              <h6 key={index} className="custom-h6">
                <Exp components={component.children!} />
              </h6>
            );
          case "span":
            return (
              <span key={index} className="custom-span">
                <Exp components={component.children!} />
              </span>
            );
          default:
            return null; // or handle other cases as needed
        }
      })}
    </>
  );
}
