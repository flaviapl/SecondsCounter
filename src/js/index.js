//import react into the bundle
import React from "react";

import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let counter=0
setInterval ( () => {
   const uno= Math.floor(counter/10000) 
   const dos=Math.floor(counter/1000) 
   const tres=Math.floor(counter/100) 
   const cuatro=Math.floor(counter/10) 
   const cinco=Math.floor(counter/1)

console.log(uno,dos,tres,cuatro,cinco)
   counter++;
    ReactDOM.render(<SecondsCounter num1={uno} num2={dos} num3={tres} num4= {cuatro} num5= {cinco}/>, document.querySelector("#app"));
} , 1000)