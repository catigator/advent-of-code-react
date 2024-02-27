import React from "react";
import '../css/PuzzleViewer.scss';
import '../css/scrollbar.scss';
import { useAtom } from 'jotai';
import { DayAtom } from "../components/DayAtom";
// import day1HtmlString from "../data/aoc_2023/aoc/day_01/PUZZLE.html?raw";
// import day1Html from "data/aoc_2023/aoc/day_01/PUZZLE.html?url";
// import pythonExample from "/aoc_2023/aoc/day_01/__main__.py?url"; // works!!!
// import publicBase from "/?url" // works!!


const PuzzleViewer = () => {

  // let [htmlFileString, setHtmlFileString] = useState("");
  const [day, setDay]: any = useAtom<number>(DayAtom);

  // async function fetchHtml(url: string) {
  //   const htmlString = await (await fetch(url)).text();
  //   console.log(htmlString);
  //   setHtmlFileString(htmlString);
  //   console.log(htmlFileString);
  //   // console.log(pythonExample);

  // }

  // useEffect(() => {
  //   // fetchHtml( publicBase + "aoc_2023/aoc/day_01/__main__.py"); // works!
  //   fetchHtml(day1Html); // works!
  // }, []);

  let generatePuzzleViewer = (puzzleDay: Number) => {

    // fetchHtml();
    let adventOfCodePuzzleUrl = "https://adventofcode.com/2023/day/" + puzzleDay;

    const puzzleViewer = (
      <div className="puzzle-viewer-component">
        <div className="code-viewer-header">
          Puzzle
        </div>
        {/* <div className="puzzle-viewer container-problem" dangerouslySetInnerHTML={{ __html: day1HtmlString }}>
        </div> */}
        <div className="puzzle-viewer container-problem">
          See puzzle at <a href={adventOfCodePuzzleUrl} target="_blank">{adventOfCodePuzzleUrl}</a>
        </div>
      </div>
    )

    return puzzleViewer;
  }

  let puzzleViewer = generatePuzzleViewer(day);

  return (
    <React.Fragment>
      {puzzleViewer}
    </React.Fragment>
  )
}

export default PuzzleViewer