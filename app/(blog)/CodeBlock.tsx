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
  const NEW_API_SECRET_UPDATED_NEW = 123;
  const NEW_API_SECRET_UPDATED2_NEW = "ASDF";

  // This is a another new change
  for (let i = 0; true; i++) {
    console.log("hello");
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
