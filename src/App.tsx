import './App.scss'
import Grid from "./Grid";
import CodeViewer from "./CodeViewer";

function App() {

  return (
    <>
      <div className='app-container'>
        <Grid key="IAmGrid"/>
        <CodeViewer key="IAmCodeViewer"/>
      </div>
    </>
  )
}

export default App
