import React from 'react';
import ReactDOM from 'react-dom/client';
//This is javascript code
function attachEventListner(){
let count = 0;
document.getElementById("clickMe").addEventListener("click" , function xyz() {
    console.log("Button is Clicked" , ++count)   
})
}
 attachEventListner()

// const heading =document.createElement("h1")
// heading.innerHTML = "Namaste Everyone"
// document.getElementById("root").appendChild(heading);

//This is react code without writing JSX with createElement and createRoot , render

const heading1 = React.createElement("h1", {id: "title"}, "Namaste React from h1");


const heading2 = React.createElement("h2", {id: "sub_title"}, "Namaste React from h2");

const container = React.createElement("div", {id:"container"}, [heading1,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)