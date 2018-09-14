import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title})
      })
      //console.log(completeGoals)
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    //console.log('the I want', this.props.completeGoals);
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index} style={{margin: '5px'}}>
                <strong>{title}</strong> completed by {email}
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log(this.state);
  const { completeGoals } = state;
  return {
    completeGoals
  }
}
export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
