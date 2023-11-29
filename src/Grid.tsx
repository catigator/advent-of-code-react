import React from "react";
import DayCell from "./DayCell";
import PuzzleViewer from "./PuzzleViewer";
import './Grid.scss';
import './Container.scss';



const Grid = () => {

  let generateGrid = () => {
    const grid = []
    let initialDays = 4;

    for (let day_i = 0; day_i < initialDays; day_i++ ) {
      grid.push(<DayCell day={0} />);
    }

    for (let day_i = 1; day_i < 25; day_i++) {
      grid.push(<DayCell day={day_i} />);
    }

    let finalDays = 0;  
    for (let day_i = 0; day_i < finalDays; day_i++ ) {
      grid.push(<DayCell day={0} />);
    }

    const adventCalendar = []
    adventCalendar.push(
      <div className="left-app">
        <div className="advent-calendar">
          {grid}
        </div>
        <div className='title'>
          <h1>Advent of Code</h1>
        </div>
        {/* <div className="container-snow"></div> */}
        <PuzzleViewer/>
      </div>
    )
    return adventCalendar;
  }

  const reactGrid = generateGrid();

  return (
    <React.Fragment>
      {reactGrid}
    </React.Fragment>
  )
}

export default Grid