import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Challenges from './components/Challenges';
import Articles from './components/Articles';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/articles" component={Articles} />
            <Route component={NotFound}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;