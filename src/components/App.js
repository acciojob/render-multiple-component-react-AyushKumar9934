import React, {Component, useState} from "react";
import '../styles/App.css';
import Proj from "./Proj";

const proj=[{projName:"1", projDesc:"This is about the project 1 "},{projName:"2", projDesc:"This is about the project 2 "},{projName:"3", projDesc:"This is about the project 3 "}]
const App = () => {
  return (
    <div id="main" className="ns-wrapper">
     {proj.map((project,index)=>{
      return <Proj key={index} projName={project.projName} projDesc={project.projDesc}/>
     })}
   
    </div>
  )
}


export default App;
