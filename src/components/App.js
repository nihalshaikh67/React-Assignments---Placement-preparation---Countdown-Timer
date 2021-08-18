  
import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [currtime, setCurrTime] = useState("")

  function timecounthandler(event){
    if(event.keyCode === 13){
      clearInterval(timer)
      if(isNaN(event.target.value)){
        setCurrTime(0)
        return
      }
      
      setCurrTime(parseInt(event.target.value))

      return
  } 
}

const ticker = ()=>{
  clearInterval(timer)
  if(currtime<=0){
    clearInterval(timer)
    setCurrTime(0)
    return
  }
  setCurrTime(currtime - 1)

}
 let timer = setInterval(()=>{
ticker()
},1000)
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={timecounthandler} /> sec.
        </h1>
      </div>
      <div id="current-time">{currtime}</div>
    </div>
  )
}


export default App;
