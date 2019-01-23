import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchChallenge } from '../../redux/challenge/actions';
import { Link } from "react-router-dom";

class ChallengeView extends Component {

  componentDidMount() {
    console.log('%c MOUNT CHALLENGE_VIEW', 'color: green');
    this.props.fetchChallenge();
  }

  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGE_VIEW', 'color: red');
  }

  render() {
    console.log('props in challenges view', this.props);

    const { data, isLoading, error } = this.props.challenge;

    if (isLoading || !data) {
      return 'loading...';
    }

    return (
      <div>{data.name} - {data.description}</div>
    )
  }
}

const mapStateToProps = state => ({
  challenge: state.challenge
})

const mapDispatchToProps = dispatch => ({
  fetchChallenge: () => dispatch(fetchChallenge()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeView)
