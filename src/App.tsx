import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import SideNav from './layout/nav';

import SysData from './sysdata';
import SysDiagnostics from './sysdiagnostics';
import SysState from './sysstate';

const links: LinkInfo[] = [
  { text: 'System Data', path: '/sysdata' },
  { text: 'System Diagnostics', path: '/sysdiagnostics' },
  { text: 'System State', path: '/sysstate' }
]

function App() {
  return (
    <Router>
      <SideNav links={links} />
      <Switch>
        <Redirect exact from="/" to="/sysdata" />
        <Route path="/sysdata">
          <SysData />
        </Route>
        <Route path="/sysdiagnostics">
          <SysDiagnostics />
        </Route>
        <Route path="/sysstate">
          <SysState />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
