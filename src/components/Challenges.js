import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Challenge from './Challenge';

class Challenges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'RandomString',
    }
  }

  generateName = () => {
    this.setState({ name: Math.random().toString(36).substring(7) })
  }

  randerChallenge = (props) => {
    return (
      <Challenges {...props} name={this.state.name} />
    );
  }

  componentDidMount() {
    console.log('%c MOUNT CHALLENGES', 'color: yellow');
  }
  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGES', 'color: red');
  }

  render() {
    console.log('this.props', this.props);

    const { match } = this.props;

    return (
      <div>
        <button onClick={this.generateName}>Generate</button>
        <ul>
          <li><NavLink activeClassName="selected" to={`${match.url}/tennis`}>Tennis</NavLink></li>
          <li><NavLink activeClassName="selected" to={`${match.url}/basketball`}>Basketball</NavLink></li>
          <li><NavLink activeClassName="selected" to={`${match.url}/football`}>Football</NavLink></li>
        </ul>

        {/* Challenges component */}
        <Route path="/challenges/:id" component={(props)=> <Challenge {...props} name={this.state.name} />} />

      </div>
    );
  }
}

export default Challenges;