import React from "react";
import DayCell from "../components/DayCell";
import CodeViewer from "./CodeViewer";
import '../css/LeftPage.scss';



const LeftPage = () => {

  let generateLeftPage = () => {
    const grid = []
    let initialDays = 4;

    for (let day_i = 0; day_i < initialDays; day_i++) {
      grid.push(<DayCell day={0} />);
    }

    for (let day_i = 1; day_i < 25; day_i++) {
      grid.push(<DayCell day={day_i} />);
    }

    let finalDays = 0;
    for (let day_i = 0; day_i < finalDays; day_i++) {
      grid.push(<DayCell day={0} />);
    }

    const adventCalendar = []
    adventCalendar.push(
      <div className="left-app">
        <div className="calendar-and-title">
          <div className="advent-calendar">
            {grid}
          </div>
          <div className='title-container'>
            <div className='title'>
              <h1>ADVENT<br/>OF CODE</h1>
            </div>
          </div>
        </div>
        <div className="code-and-copyright">
          <CodeViewer key="IAmCodeViewer" />
          <div className='copyright-container'>
            <div className='copyright'>
              © 2023 Jakob Pettersson Peeker
            </div>
          </div>
        </div>
      </div>
    )
    return adventCalendar;
  }

  const reactLeftPage = generateLeftPage();

  return (
    <React.Fragment>
      {reactLeftPage}
    </React.Fragment>
  )
}

export default LeftPage