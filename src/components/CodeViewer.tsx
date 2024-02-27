import React, { useEffect } from "react";
import '../css/CodeViewer.scss';
import { useAtom } from 'jotai';
import { DayAtom } from "../components/DayAtom";

import Prism from "prismjs";
import "../css/prism.css";
import 'prismjs/components/prism-python'; // Language
// import "prismjs/themes/prism-tomorrow.css";
import "../css/prism-material-light.scss";
import '../css/scrollbar.scss';
import pythonDay1String from "../data/aoc_2023/aoc/day_01/__main__.py?raw";
import pythonDay2String from "../data/aoc_2023/aoc/day_02/__main__.py?raw";
import pythonDay3String from "../data/aoc_2023/aoc/day_03/__main__.py?raw";
import pythonDay4String from "../data/aoc_2023/aoc/day_04/__main__.py?raw";
import pythonDay5String from "../data/aoc_2023/aoc/day_05/__main__.py?raw";
import pythonDay6String from "../data/aoc_2023/aoc/day_06/__main__.py?raw";
import pythonDay7String from "../data/aoc_2023/aoc/day_07/__main__.py?raw";
import pythonDay8String from "../data/aoc_2023/aoc/day_08/__main__.py?raw";
import pythonDay9String from "../data/aoc_2023/aoc/day_09/__main__.py?raw";
import pythonDay10String from "../data/aoc_2023/aoc/day_10/__main__.py?raw";
import pythonDay11tring from "../data/aoc_2023/aoc/day_11/__main__.py?raw";
import pythonDay12tring from "../data/aoc_2023/aoc/day_12/__main__.py?raw";
import pythonDay13tring from "../data/aoc_2023/aoc/day_13/__main__.py?raw";
import pythonDay14String from "../data/aoc_2023/aoc/day_14/__main__.py?raw";
import pythonDay15tring from "../data/aoc_2023/aoc/day_15/__main__.py?raw";
import pythonDay16tring from "../data/aoc_2023/aoc/day_16/__main__.py?raw";
import pythonDay17tring from "../data/aoc_2023/aoc/day_17/__main__.py?raw";
import pythonDay18tring from "../data/aoc_2023/aoc/day_18/__main__.py?raw";
import pythonDay19String from "../data/aoc_2023/aoc/day_19/__main__.py?raw";
import pythonDay20tring from "../data/aoc_2023/aoc/day_20/__main__.py?raw";
import pythonDay21tring from "../data/aoc_2023/aoc/day_21/__main__.py?raw";
import pythonDay22tring from "../data/aoc_2023/aoc/day_22/__main__.py?raw";
import pythonDay23tring from "../data/aoc_2023/aoc/day_23/__main__.py?raw";
import pythonDay24tring from "../data/aoc_2023/aoc/day_24/__main__.py?raw";


// import publicBase from "/?url"
// import pythonDay1 from "/aoc_2023/aoc/day_01/__main__.py?url";

let Code = function (code: string, language: string) {
  const [day, setDay]: any = useAtom<number>(DayAtom);
  useEffect(() => {
    Prism.highlightAll();
  }, [day]);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

let GetPythonString = function (day: Number): string {
  if (day === 1) {
    return pythonDay1String;
  } else if (day === 2) {
    return pythonDay2String;
  } else if (day === 3) {
    return pythonDay3String;
  } else if (day === 4) {
    return pythonDay4String;
  } else if (day === 5) {
    return pythonDay5String;
  } else if (day === 6) {
    return pythonDay6String;
  } else if (day === 7) {
    return pythonDay7String;
  }
  return "";
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
  
  const [day, setDay]: any = useAtom<number>(DayAtom);

  let generateCodeViewer = () => {

    // fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py");
    // fetchHtml(pythonDay1);
    let dayString = GetPythonString(day);

    const codeViewer = (
      <div className="code-viewer-container"> 
        <div className="code-viewer">
        <div className="code-viewer-header">
          Code
        </div>
        <div className="code-container">
          {Code(dayString, "python")}
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