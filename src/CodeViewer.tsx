import React from "react";
import './CodeViewer.css';


const CodeViewer = () => {

    let generateCodeViewer = () => {
      
        const codeViewer = (
          <div className="code-viewer-container">
            <div className="code-viewer">  
            </div>
          </div>
        
        );

        return codeViewer;
    }
  
    const reactCodeViewer = generateCodeViewer();
        
    return(
      <React.Fragment>
        {reactCodeViewer}
      </React.Fragment>
    )
  }
    
  export default CodeViewer