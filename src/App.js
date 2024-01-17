import React from "react";
import  ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () =>{
  return (
    <>
      <Navbar/>
      <Body/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);