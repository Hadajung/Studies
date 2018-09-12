import React, {Component} from 'react';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';
let startTime;
class StopWatch extends Component{
    constructor(props){
      super(props);
      this.state={
          seconds: 10,
          interval: ''
      }
    }
    startStopWatch() {
      this.state.interval = setInterval(() => this.r_startStopWatch(this.state.seconds), 1000);
    }
    r_startStopWatch(seconds){
        if(seconds>0){
           seconds--;
           this.setState({seconds:seconds});
           console.log(this.state.seconds);
        } else {
          console.log('all done');
          alert('all done!');
          clearInterval(this.state.interval)
        }
    }
  render(){
    return(
      <div>
      <div>
        Starting stopWatch {this.state.seconds} seconds
      </div>
        <Form inline>
          <FormControl placeholder="enter the time for stop watch" value={this.state.seconds} onChange={event => this.setState({seconds:event.target.value})}/>
          <Button onClick={() => this.startStopWatch()}>Submit</Button>
        </Form>
      </div>
      )
  }
}
export default StopWatch;
