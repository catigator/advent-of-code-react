import React, { useEffect, useState } from "react";
import '../css/PuzzleViewer.scss';
import '../css/scrollbar.scss';
import day1Html from "../data/day_1_example.html?url";
// import pythonExample from "../aoc_2023/aoc/day_01/__main__.py?url"; // works!!!
import publicBase from "/?url" // works!!
// import day1Html from "../data/day_1_example";

const PuzzleViewer = () => {

  let [htmlFileString, setHtmlFileString] = useState("");

  async function fetchHtml(url: string) {
    const htmlString = await (await fetch(url)).text();
    console.log(htmlString);
    setHtmlFileString(htmlString);
    console.log(htmlFileString);

  }

  useEffect(() => {
    fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py"); // works!
    fetchHtml(day1Html); // works!
  }, []);

  let generatePuzzleViewer = () => {

    // fetchHtml();
    console.log(htmlFileString);

    const puzzleViewer = (
      <div className="puzzle-viewer-component">
        <div className="code-viewer-header">
          Puzzle
        </div>
        <div className="puzzle-viewer container-problem" dangerouslySetInnerHTML={{ __html: htmlFileString }}>
        </div>
      </div>
    )

    return puzzleViewer;
  }

  let puzzleViewer = generatePuzzleViewer();

  return (
    <React.Fragment>
      {puzzleViewer}
    </React.Fragment>
  )
}

export default PuzzleViewer