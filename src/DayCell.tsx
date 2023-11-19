import React from "react";

import './DayCell.css';

interface CellProps {
  day: number,
}

const DayCell = (props: CellProps) => {

  let onclick = () => {
      console.log("clicked!");
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