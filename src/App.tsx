import './css/App.scss'
import LeftPage from "./LeftPage";
import CodeViewer from "./CodeViewer";

function App() {

  return (
    <>
      <div className='app-container'>
        <LeftPage key="IAmLeftPage"/>
        <CodeViewer key="IAmCodeViewer"/>
      </div>
    </>
  )
}

export default App
