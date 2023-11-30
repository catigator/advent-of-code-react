import React, { useEffect } from "react";
import '../css/CodeViewer.scss';
import Prism from "prismjs";
import "../css/prism.css";
import 'prismjs/components/prism-python'; // Language
// import "prismjs/themes/prism-tomorrow.css";
import "../css/prism-material-light.scss";


let Code = function (code: string, language: string) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}


const CodeViewer = () => {

  let generateCodeViewer = () => {

    const code = `def some_function():
        a = 4 + 3
        return a
        `

    const codeViewer = (
      <div className="code-viewer-container"> 
        <div className="code-viewer">
        <div className="code-viewer-header">
          Code
        </div>
          {Code(code, "python")}
        </div>
      </div>
    );

    return codeViewer;
  }

  const reactCodeViewer = generateCodeViewer();

  useEffect(() => {
    Prism.highlightAll();
  }, []);



  return (
    <React.Fragment>
      <div className="right-app">
        {reactCodeViewer}
      </div>
    </React.Fragment>
  )
}

export default CodeViewer