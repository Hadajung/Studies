import { SIGNED_IN, SET_GOALS, COMPLETED_GOALS } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email: email
  }
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: COMPLETED_GOALS,
    completeGoals
  }
  return action;
}
