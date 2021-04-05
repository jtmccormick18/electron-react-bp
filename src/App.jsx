import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Navigation from './components/Navigation';

import GradeReport from './views/grade-report';

import Settings from './views/settings';

import * as axios from 'axios';

import icon from '../assets/icon.svg';

import logo from '../assets/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.global.css';

const Hello = (props) => {
  console.log({ props });
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>{props.name || 'Made IT'}</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

let routes = [
  // {
  //   name: 'Home',
  //   path: '/',
  //   icon: 'fa fa-fw fa-home',
  // },
  {
    name: 'GIS',
    path: '/gis',
    icon: 'fa fa-globe',
  },
  {
    name: 'Comp Finder',
    path: '/comp-finder',
    icon: 'fa fa-search',
  },
  {
    name: 'Test',
    path: '/test',
    icon: '',
  },
  {
    name: 'Grade Report',
    path: '/grade-report',
    icon: 'fa fa-home',
    component: GradeReport,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'fa fa-cog',
    component: Settings,
  },
];

routes = routes.map((route) => {
  if (route['component']) {
    return route;
  } else {
    route['component'] = Hello;
    return route;
  }
});

console.log({ routes });

export default function App() {
  return (
    <Container fluid className="p-0" id={'master-container'}>
      <Router>
        <Navigation logo={logo} routes={routes} />
        <Container fluid id={'inner-container'}>
          <Switch>
            {/* <Route path="/" component={Hello} /> */}
            <Route exact path="/home" component={Hello} />
            {routes.map((route) => (
              <Route path={route.path} component={route.component} />
            ))}
          </Switch>
        </Container>
      </Router>
    </Container>
  );
}
