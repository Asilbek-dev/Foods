import React from 'react';
import {render} from 'react-dom';
import App from './App';
import "./components/main.css";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./component/FA/css/all.min.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

