import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDagDPBm7ZEVb4PSHSpQvNjU7jeIRkahKY',
        authDomain: 'auth-2a008.firebaseapp.com',
        databaseURL: 'https://auth-2a008.firebaseio.com',
        projectId: 'auth-2a008',
        storageBucket: 'auth-2a008.appspot.com',
        messagingSenderId: '271952070226'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({ loggedIn: true });

        } else {
          this.setState({ loggedIn: false });
        }

      });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <CardSection>
            <Button whenPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
