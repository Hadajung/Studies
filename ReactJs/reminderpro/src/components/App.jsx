import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }

  }

  addReminder() {
    console.log(this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    //console.log(id);
    //console.log(this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const reminders = this.props.reminders;
    //console.log(reminders);
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>
                    {moment(new Date(reminder.dueDate)).fromNow()}
                  </em></div>
                {
                  moment(new Date(reminder.dueDate)).isBefore(moment(new Date())) ?
                    <div className="alert alert-danger">
                    It passed!</div> : <div></div>

                }
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {

    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group reminder-form">
            <input
              className="form-control"
              placeholder="I have to ...."
              onChange={event => this.setState({text: event.target.value})}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.addReminder()}}}
            />
          <input
            className="form-control"
            type="datetime-local"
            onChange={event => this.setState({dueDate: event.target.value})}
          />
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.addReminder()}
            >
              Add Reminder
            </button>
          </div>
            { this.renderReminders() }
          <div
            className="btn btn-danger clear-button"
            onClick={() => this.props.clearReminders()}
          >
          Clear Reminders
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder, deleteReminder}, dispatch);
// }
export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
//왜냐면 우리는 지금 액션 하나만 있어서 ㅡㅡ
//export default connect(mapStateToProps, mapDispatchToProps)(App);
