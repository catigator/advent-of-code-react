import React, { useEffect } from "react";
import CodeViewer from "./CodeViewer";
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
        <CodeViewer key="IAmCodeViewer"/>
      </div>
    </React.Fragment>
  )
}

export default RightPage