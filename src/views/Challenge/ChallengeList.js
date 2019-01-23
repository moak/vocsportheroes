import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchChallenges } from '../../redux/challenges/actions';
import { Link } from "react-router-dom";

class ChallengeList extends Component {

  componentDidMount() {
    console.log('%c MOUNT CHALLENGE_LIST', 'color: green');
    this.props.fetchChallenges();
  }
  componentWillUnmount() {
    console.log('%c UNMOUNT CHALLENGE_LIST', 'color: red');
  }

  render() {
    console.log('props in challenges list', this.props);
    const {
      challenges: {
        data, isLoading,
      },
      match,
    } = this.props;

    if (isLoading || !data) {
      return 'loading...';
    }

    return (
      <div>
        {data.map(item => {
          return (
            <Link key={item._id} to={`${match.url}/${item._id}`}><div>{item.name}</div></Link>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.challenges
})

const mapDispatchToProps = dispatch => ({
  fetchChallenges: () => dispatch(fetchChallenges()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeList)
