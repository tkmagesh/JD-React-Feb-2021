import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
import * as calculator from './calc';
console.log(calculator);
calculator.add(10,20); 
*/

/* 
import * as calculator from './calc';
//const add = calculator.add;
const { add } = calculator;
add(10,20); 
*/

/* 
import { add } from './calc';
add(10,20);  
*/

//importing the default exported object
/* 
import calculator from './calc';
console.log(calculator); 
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
