import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from   './reducer_completeGoals';

export default combineReducers({
  user: user,
  goals: goals,
  completeGoals : completeGoals
})
