
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="App">
      <h1>React Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <h2 style={{lineHeight:"0px",paddingBottom:"10px"}}>Hover over me</h2>
      </Tooltip><br />
      <Tooltip text="This is another tool tip">
        <p style={{lineHeight:"0px"}}>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  )
}

export default App
