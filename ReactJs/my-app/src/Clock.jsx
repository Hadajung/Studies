import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() =>this.getTimeUntil(this.props.deadline), 1000)
  }

  leadingzero(number){
    // if(number < 10) {
    //   return '0' + number;
    // }
    // return number;
    return number < 10 ? '0' + number : number;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    //console.log('time', time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));

    //console.log(seconds, minutes, hours, days);
    this.setState({days, hours: hours, minutes: minutes, seconds: seconds});
  }

  render() {
    return(
      <div>
        <div className="Clock-days">{this.leadingzero(this.state.days)} days</div>
        <div className="Clock-hours">{this.leadingzero(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leadingzero(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leadingzero(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
