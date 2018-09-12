import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    //console.log('id.email', this.state);
    const { email, password } = this.state;

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error: error})
    })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h1>Sign In</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="Insert your email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="Insert your password"
            onChange={event => this.setState({password: event.target.value})}
            onKeyPress={event => {
              if(event.key === 'Enter'){
                this.signIn()
              }
            }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
          Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sing Up Instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
