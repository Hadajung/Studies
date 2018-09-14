import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal.jsx';
import GoalList from './GoalList.jsx';
import CompleteGoalList from './CompleteGoalList.jsx';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }


  render() {
    return(
      <div style={{margin: '5px'}}>
        <h3>GOAL COACH</h3>
        <AddGoal />
        <hr />
        <h4>GOAL LIST</h4>
        <GoalList />
        <hr />
        <h4>COMPLETED GOAL LIST</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
