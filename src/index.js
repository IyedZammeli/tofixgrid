import React from 'react';
import ReactDOM from 'react-dom';

import App4 from './App4';
import Grid1 from './Grid1';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Grid1/>
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>,
  document.getElementById('root')
);*/ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
