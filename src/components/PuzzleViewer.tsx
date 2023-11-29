import React, { useEffect, useState } from "react";
import '../css/PuzzleViewer.scss';
import '../css/scrollbar.scss';
import day1Html from "../data/day_1_example.ts";

const PuzzleViewer = () => {

  let[htmlFileString, setHtmlFileString] = useState("");

  async function fetchHtml() {
    let htmlString = await (await fetch(`../data/day_1_example.html`)).text();
    console.log(htmlString);
    setHtmlFileString(htmlString);
    console.log(htmlFileString);
  }

  useEffect(() => {
    fetchHtml();
  }, []);


  let generatePuzzleViewer = () => {

    // fetchHtml();
    console.log(htmlFileString);

    const puzzleViewer = (
            <div className="puzzle-viewer container-problem" dangerouslySetInnerHTML={{ __html: day1Html }}>
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