import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClickf = (e) =>{
    if(true)console.log('32423');console.dir(e)
  }
  
  return (
    <div onClick={(e)=>onClickf(e)}>
      111
    </div>
  );
}

export default App;
