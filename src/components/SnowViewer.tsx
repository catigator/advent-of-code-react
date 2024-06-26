import React from "react";
import '../css/SnowViewer.scss';
import '../css/scrollbar.scss';
import { useAtom } from 'jotai';
import { DayAtom } from "../components/DayAtom";


const SnowViewer = () => {

  const [day, setDay]: any = useAtom<number>(DayAtom);

  let generateSnowViewer = (puzzleDay: Number) => {

    const snowViewer = (
      <div className="snow-viewer-component">
        <div className="snow-viewer-header">
          Snow
        </div>
        <div className="snow-viewer container-problem">
          It is currently snowing!
      </div>
      </div>
    )

    return snowViewer;
  }

  let snowViewer = generateSnowViewer(day);

  return (
    <React.Fragment>
      {snowViewer}
    </React.Fragment>
  )
}

export default SnowViewer