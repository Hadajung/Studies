import React, { Component } from 'react';

const style = {
  backgroundColor: "white",
  border: "black solid 2px",
  textAlign: "center",
  fontSize: "20px",
  width: "40px",
  height: "40px",
  margin: -1,
  display: "inline-block",
  verticalAlign: "top"
}


class Square extends Component {
  render() {
    //console.log(this.props);
    return (
      <div style={style} onClick={this.props.handleClick}>{this.props.value}</div>
    )
  }
}

export default Square;
