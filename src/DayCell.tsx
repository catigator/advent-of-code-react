import React from "react";

import './DayCell.scss';

interface CellProps {
  day: number,
}

const DayCell = (props: CellProps) => {

  let onclick = (event: any) => {
      console.log("clicked!   " + props.day);
  }
  
  return(
    <React.Fragment>
      <li className={"day-cell"} id={String(props.day)} onClick={onclick}>
        <div className="day-cell-text">{props.day}</div>
        </li>
    </React.Fragment>
  )
}

export default DayCell