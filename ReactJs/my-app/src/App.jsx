import React, { Component } from 'react';
import StopWatch from './Stopwatch';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'September 25, 2018',
      newDeadline: '',
      stopwatch: 0,
      newStopwatch: ''
    }
  }

  changeDeadline() {
    //console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  changeStopwatch() {
    this.setState({stopwatch: this.state.newStopwatch});
  }

  render() {
    return(
      //console.log(Date.now()),

      <div className="App">
        <div className="App_title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
      <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Change
          </Button>
        </Form>
        <div className="App_title">Stopwatch<br />{this.state.stopwatch}</div>
        <StopWatch
        />
      <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new time'
            onChange={event => this.setState({newStopwatch: event.target.value})}
          />
          <Button onClick={() => this.changeStopwatch()}>
            Change
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
