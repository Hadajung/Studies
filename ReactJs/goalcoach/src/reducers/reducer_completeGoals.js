import { COMPLETED_GOALS } from '../constants';

export default (state = [], action) => {
  //console.log(action);
  switch(action.type) {
    case COMPLETED_GOALS:
      const { completeGoals } = action;
      return completeGoals;
    default:
      return state;
  }
}
