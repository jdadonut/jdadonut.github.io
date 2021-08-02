import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import About from './About';
import Policy from './Policy';
import Policies from './Policies';
import Projects from './_projects.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { MDXStore } from './util/Store'; 
const mdx_store = new MDXStore("./blog/**/*.mdx");
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
      <Route path="/blog/post/:id">
          <Home store={mdx_store}/>
        </Route>
      <Route path="/blog">
          <Home store={mdx_store}/>
        </Route>
        <Route path="/projects" >
        <Policies  modified={true} data={Projects } title={"Projects"}/>
        </Route>
        <Route path="/policies" component={Policies}/>
        <Route path="/policy/:id" component={Policy}/>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

