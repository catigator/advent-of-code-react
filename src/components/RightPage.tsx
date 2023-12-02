import React from "react";
import PuzzleViewer from "./PuzzleViewer";
import '../css/RightPage.scss';


const RightPage = () => {

  let generateConfigBar = () => {

    const configBar = (
      <div className="config-bar"> 
      </div>
    );

    return configBar;
  }

  const reactConfigBar = generateConfigBar();

  return (
    <React.Fragment>
      <div className="right-app">
        {reactConfigBar}
        <PuzzleViewer/>
      </div>
    </React.Fragment>
  )
}

export default RightPage