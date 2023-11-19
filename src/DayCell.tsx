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
      <li className={"daycell"} id={String(props.day)} onClick={onclick}></li>
    </React.Fragment>
  )
}

export default DayCell