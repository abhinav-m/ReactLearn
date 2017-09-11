import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts.js';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer  //Important to use 'form' as the key for this reducer.
});

export default rootReducer;
