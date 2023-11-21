import React from "react";
import DayCell from "./DayCell";
import './Grid.css';


const Grid = () => {

  let generateGrid = () => {
    const grid = []

    for (let day_i = 1; day_i < 25; day_i ++) {
        grid.push(<DayCell day={day_i}/>);  
      }

      const adventCalendar = []
      adventCalendar.push(<div className="advent-calendar">{grid}</div>)
      return adventCalendar;
  }

  const reactGrid = generateGrid();
      
  return(
    <React.Fragment>
      {reactGrid}
    </React.Fragment>
  )
}
  
export default Grid