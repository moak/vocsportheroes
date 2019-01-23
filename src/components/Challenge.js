import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchChallenges } from '../redux/challenges/actions';

class Challenge extends Component {

  componentDidMount() {
    console.log('%c MOUNT CHALLENGE', 'color: green');
  }
  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGE', 'color: red');
  }

  loadChallenge = () => {
    console.log('fetchChallenges');

    this.props.fetchChallenges();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <button onClick={this.loadChallenge}>Load challenge</button>
        <h3>URL ID parameter: {this.props.match.params.id}</h3>
        <b>{this.props.name}</b>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challenge: state.challenge
})

const mapDispatchToProps = dispatch => ({
  fetchChallenges: () => dispatch(fetchChallenges())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge)
