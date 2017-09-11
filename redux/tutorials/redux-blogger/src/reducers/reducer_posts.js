import _ from 'lodash';

import { FETCH_POSTS,FETCH_POST,DELETE_POST  } from '../actions';

export default function(state = {},action) {
  switch(action.type) {
     case FETCH_POST:
    //  const post = action.payload.data;
    //  const newState = {...state};
    //  newState[post.id] = post;
    //  return newState;
    //ES6 computed property name and assigning it to data recieved.
    return {...state,[action.payload.data.id]:action.payload.data};
    case FETCH_POSTS:
    return _.mapKeys(action.payload.data,'id');

    case DELETE_POST:
    return _.omit(state,action.payload); //payload is id in DELETE_POST action type case.
    default: return state;
  }
}
