import './App.css'
import Grid from "./Grid";
import CodeViewer from "./CodeViewer";

function App() {

  return (
    <>
      <div className='title'>
        <h1>Advent of Code</h1>
      </div>
      <div className='app-container'>
        <Grid key="IAmGrid"/>
        <CodeViewer key="IAmCodeViewer"/>
      </div>
    </>
  )
}

export default App
