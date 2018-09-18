import React, { Component } from 'react';

class App extends Component {
  state ={
    password: '',
    valid: false
  }
  //1.length is at least 8
  //2. contains at least 1 uppercase letter
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.password}
          onChange={event => {
            const value = event.target.value;
            let valid;
            if(value.length >= 8 && value.replace(/[^A-Z]/g, '').length >= 1) {
              valid = true;
            } else {
              valid = false;
            }
          this.setState({
            password: value,
            valid
          })
          }}

        />
        <button onClick={() => console.log(this.state.password) }>
          Submit
        </button>
        <div>
          {this.state.valid ? "Valid Password!" : "Invalid Password"}
        </div>
      </div>


    )
  }
}

export default App;
