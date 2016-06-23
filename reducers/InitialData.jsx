import {
  INITIAL_LOAD
} from '../actions.jsx';

export function InitialData(state = {}, action = { type: null }) {
  if (action.type === INITIAL_LOAD) {
    const newState = Object.assign(action.initialData);
    return newState;
  }
  return state;
}

export default InitialData;