import React from "react";

import '../css/DayCell.scss';

interface CellProps {
  day: number,
}

const DayCell = (props: CellProps) => {

  let onclick = () => {
      console.log("clicked!   " + props.day);
  }
  
  let dayText = props.day.toString();

  let canOpen = 5 - props.day > 0;
  if (dayText === "-") {
    canOpen = false;
  }

  let className = "day-cell cannotOpen"
  if (canOpen) {
    className = "day-cell canOpen"
  }

  let selectedDay = "";
  if (props.day === 1) {
    selectedDay = " selectedDay"
  }

  if (dayText === "0") {
    dayText =  "-";
    className += " hidden"
  } 
  
  return(
    <React.Fragment>
      <li className={className + selectedDay} id={String(props.day)} onClick={onclick}>
        <div className="day-cell-text">{dayText}</div>
        </li>
    </React.Fragment>
  )
}

export default DayCell