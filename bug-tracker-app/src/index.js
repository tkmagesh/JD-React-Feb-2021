import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as bugActionCreators from './bugs/actions';
import BugTracker from './bugs'
import store from './store';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);


function renderApp(){
  const bugs = store.getState();
  ReactDOM.render(
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderApp();
store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
