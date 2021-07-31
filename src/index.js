import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
ReactDOM.render(
  <>
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
    <ReactTooltip place="top" type="light" effect="solid"/>
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

