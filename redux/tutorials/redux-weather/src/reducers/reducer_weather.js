import {FETCH_WEATHER} from'../actions/index'

export default function(state = [],action) {
  switch(action.type) {
    case FETCH_WEATHER:
    return [action.payload.data, ...state]; //Adding the new city in the redux state.

  }
  return state;
}
