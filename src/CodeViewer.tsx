import React, { useEffect } from "react";
import './CodeViewer.css';
import Prism from "prismjs";
import "./css/prism.css";
import "prismjs/themes/prism-tomorrow.css";


let Code = function(code: string, language: string ) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}


const CodeViewer = () => {

    

    let generateCodeViewer = () => {

      const code = `def some_function():
        a = 4 + 3
        return a
        `
      
        const codeViewer = (
          <div className="code-viewer-container">
            <div className="code-viewer">
            {Code(code, "python")}
            </div>
          </div>
        
        );

        return codeViewer;
    }
  
    const reactCodeViewer = generateCodeViewer();

    useEffect(() => {
      Prism.highlightAll();
    }, []);

    
        
    return(
      <React.Fragment>
        {reactCodeViewer}
      </React.Fragment>
    )
  }
    
  export default CodeViewer