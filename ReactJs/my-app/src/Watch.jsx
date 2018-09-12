import React, { Component } from 'react';
import './App.css';

class Watch extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentWillMount() {
    this.startCountdown(this.props.stopwatch);
  }

  componentDidMount() {
    setInterval(() =>this.startCountdown(this.props.stopwatch), 1000)
  }

  leadingzero(number){
    // if(number < 10) {
    //   return '0' + number;
    // }
    // return number;
    return number < 10 ? '0' + number : number;
  }
startCountdown(stopwatch) {
    const time = Date.parse(stopwatch);
    console.log(time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);

    //console.log(seconds, minutes, hours, days);
    this.setState({ hours: hours, minutes: minutes, seconds: seconds});
  }

  render() {
    return(
      <div>
        <div className="Clock-hours">{this.leadingzero(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leadingzero(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leadingzero(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Watch;
