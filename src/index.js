// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Test from './Test'
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//    <Test />
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();



import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from './components/TodoContainer'


// const element = <h1>Hello from Create React App</h1>

// render html in root (index.html file in public folder)
ReactDOM.render(

  //verify for eny issues at runtime
  <React.StrictMode>    
    {/* render called component here*/}
      <TodoContainer />
     
  </React.StrictMode>,



document.getElementById("root")

)