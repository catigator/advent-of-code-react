import '../css/App.scss'
import LeftPage from "../components/LeftPage";
import RightPage from "../components/RightPage";

function App() {

  return (
    <>
      <div className='app-container'>
        <LeftPage key="IAmLeftPage"/>
        <RightPage key="IAmRightPage"/>
      </div>
    </>
  )
}

export default App
