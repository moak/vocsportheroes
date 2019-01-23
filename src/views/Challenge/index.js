import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import ChallengeList from './ChallengeList';
import ChallengeView from './ChallengeView';

class Challenges extends Component {
  componentDidMount() {
    console.log('%c MOUNT CHALLENGES_VIEW', 'color: yellow');
  }
  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGES_VIEW', 'color: red');
  }
  render() {
    return (
      <Switch>
        <Route exact path="/:lang(fr|en)?/challenges" component={ChallengeList} />
        <Route path="/:lang(fr|en)?/challenges/:id" component={ChallengeView} />
      </Switch>
    );
  }
}

export default Challenges;