import React from "react";

import './DayCell.scss';

interface CellProps {
  day: number,
}

const DayCell = (props: CellProps) => {

  let onclick = (event: any) => {
      console.log("clicked!   " + props.day);
  }

  const canOpen = 5 - props.day > 0;

  let className = "day-cell cannotOpen"
  if (canOpen) {
    className = "day-cell canOpen"
  }
  
  return(
    <React.Fragment>
      <li className={className} id={String(props.day)} onClick={onclick}>
        <div className="day-cell-text">{props.day}</div>
        </li>
    </React.Fragment>
  )
}

export default DayCell