import React, { useEffect, useState } from "react";
import '../css/CodeViewer.scss';
import Prism from "prismjs";
import "../css/prism.css";
import 'prismjs/components/prism-python'; // Language
// import "prismjs/themes/prism-tomorrow.css";
import "../css/prism-material-light.scss";
import publicBase from "/?url"


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

  let [codeFileString, setCodeFileString] = useState("");

  async function fetchHtml(url: string) {
    const codeString = await (await fetch(url)).text();
    console.log(codeString);
    setCodeFileString(codeString);
    console.log(codeFileString);
  }

  useEffect(() => {
    fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py");
  }, []);
  
  useEffect(() => {
    Prism.highlightAll();
  }, [codeFileString]);


  let generateCodeViewer = () => {

    // const code = `def some_function():
    //     a = 4 + 3
    //     return a
    //     `
    fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py");

    const codeViewer = (
      <div className="code-viewer-container"> 
        <div className="code-viewer">
        <div className="code-viewer-header">
          Code
        </div>
        <div className="code-container">
          {Code(codeFileString, "python")}
          </div>
        </div>
      </div>
    );

    return codeViewer;
  }

  const reactCodeViewer = generateCodeViewer();



  return (
    <React.Fragment>
      {reactCodeViewer}
    </React.Fragment>
  )
}

export default CodeViewer