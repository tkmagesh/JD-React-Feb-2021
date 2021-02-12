import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import BugTracker from './bugs'
import Projects from './projects';
import Home from './home';

import store from './store';

import TimerContainer from './timer';

    
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <h1>Bug Tracker</h1>
        <TimerContainer/>
        <div>
          <span> [ <Link to="/">Home</Link> ] </span>
          <span> [ <Link to="/bugs">Bugs</Link> ] </span>
          <span> [ <Link to="/projects">Projects</Link> ] </span>
        </div>
        <hr/>
        <Switch>
          <Route path="/bugs">
            <BugTracker/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


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
