import React, { Component } from 'react';

class Challenge extends Component {
  componentDidMount() {
    console.log('%c MOUNT CHALLENGE', 'color: green');
  }
  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGE', 'color: red');
  }

  render() {
    return (
      <div>
        <h3>URL ID parameter: {this.props.match.params.id}</h3>
        <b>{this.props.name}</b>
      </div>
    );
  }
}

export default Challenge;