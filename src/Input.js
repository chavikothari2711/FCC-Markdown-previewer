import React, { useState } from "react";
import { markdownInitialText } from "./markedText";
import ReactMarkdown from "react-markdown";
import { Toolbar } from "./Toolbar";

export function Input(props) {
  const [input, setInput] = useState(markdownInitialText);
  const [height, setHeight] = useState("250px");
  const [visibility, setVisibility] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleEditor() {
    setHeight(height === "650px" ? "250px" : "650px");
  }
  function handlePreview() {
    setVisibility(visibility === "none" ? "" : "none");
  }
  return (
    <>
      <div className="editor-pannel" style={{ display: visibility }}>
        <Toolbar
          width="600px"
          title="Editor"
          handle={handleEditor}
          left="490px"
        />
        <textarea
          id="markdown-text"
          onInput={handleInput}
          value={input}
          style={{ height: height }}
        ></textarea>
      </div>
      <div className="preview-pannel">
        <Toolbar
          width="800px"
          title="Preview"
          handle={handlePreview}
          left="675px"
        />
        <ReactMarkdown className="preview-text">{input}</ReactMarkdown>
      </div>
    </>
  );
}
