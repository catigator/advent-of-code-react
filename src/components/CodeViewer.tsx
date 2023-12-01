import React, { useEffect } from "react";
import '../css/CodeViewer.scss';
import Prism from "prismjs";
import "../css/prism.css";
import 'prismjs/components/prism-python'; // Language
// import "prismjs/themes/prism-tomorrow.css";
import "../css/prism-material-light.scss";
import '../css/scrollbar.scss';
import pythonDay1String from "../data/aoc_2023/aoc/day_01/__main__.py?raw";

// import publicBase from "/?url"
// import pythonDay1 from "/aoc_2023/aoc/day_01/__main__.py?url";

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

  // let [codeFileString, setCodeFileString] = useState("");

  // async function fetchHtml(url: string) {
  //   const codeString = await (await fetch(url)).text();
  //   console.log(codeString);
  //   setCodeFileString(codeString);
  //   console.log(codeFileString);
  // }

  // useEffect(() => {
  //   // fetchHtml(publicBase + "aoc_2023/aoc/day_01/__main__.py");
  //   fetchHtml(pythonDay1);
  // }, []);
  
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [codeFileString]);


  let generateCodeViewer = () => {

    // fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py");
    // fetchHtml(pythonDay1);

    const codeViewer = (
      <div className="code-viewer-container"> 
        <div className="code-viewer">
        <div className="code-viewer-header">
          Code
        </div>
        <div className="code-container">
          {Code(pythonDay1String, "python")}
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