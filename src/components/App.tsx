import '../css/App.scss'
import LeftPage from "../components/LeftPage";
import CodeViewer from "../components/CodeViewer";

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
