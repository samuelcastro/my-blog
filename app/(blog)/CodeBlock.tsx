import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const API_SECRET_UPDATED = 123;
const API_SECRET_UPDATED2 = "ASDF";

// This is a new change
while (true) {
  console.log("hello");
}

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div>
      <p>{value.filename}</p>

      <SyntaxHighlighter language={"javascript"} style={a11yDark}>
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}
