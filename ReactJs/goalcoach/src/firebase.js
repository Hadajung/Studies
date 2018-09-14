import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBy9mGf4tD594P6OfVsS6h6VOc9u52luA4",
  authDomain: "goalcoach-62920.firebaseapp.com",
  databaseURL: "https://goalcoach-62920.firebaseio.com",
  projectId: "goalcoach-62920",
  storageBucket: "goalcoach-62920.appspot.com",
  messagingSenderId: "933460595744"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
