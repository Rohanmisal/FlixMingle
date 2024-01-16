import React from "react";
import  ReactDOM from "react-dom";

const App = () =>{
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);