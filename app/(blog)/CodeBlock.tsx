import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  const target = "this is a new change";
  const codeValue = value.code;

  if (codeValue == "test") {
    return <h1>This is a test {target}</h1>;
  }

  while (true) {
    console.log("This is an infinite loop");
  }

  return (
    <div>
      <p>{value.filename}</p>

      <SyntaxHighlighter language={"javascript"} style={a11yDark}>
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}
