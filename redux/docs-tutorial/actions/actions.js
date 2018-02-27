import fetch from 'cross-fetch';

import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './types';

//Action creators.
export function selectSubreddit(subreddit) {
  return {
    type:SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type:INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function requestPosts(subreddit) {
  return {
    type:REQUEST_POSTS,
    subreddit
  }
}

export function receivePosts (subreddit,json) {
  return {
    type:RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    recievedAt: Date.now()
  }
}

//Redux-thunk action creator.
//This can be used like any other action creator.
//store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit) {
  //Thunk middleware knows how to handle functions.
  //It passes dispatch method as an argument to the function.
  //thus it can dispatch actions ITSELF.

  return function(dispatch) {

    //First we use the dispatch method to update app state,
    //to inform that our API call is starting.
    dispatch(requestPosts(subreddit));


    //The function called by thunk middleware can also return a value,
    //this  can be passed on as return value of the dispatch method.

    //In this case, we return a promise to wait for.
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
           .then(
             response => response.json(),
             error => console.log('Error occurred',error)
           )
           .then(json =>
             //We can dispatch many times.
             //Here we update the app state with results of the new API call.

             dispatch(receivePosts(subreddit,json));
           )

  }

  function shouldFetchPosts(state,subreddit) {
    const  posts = state.postsBySubreddit[subreddit];
    if(!posts) {
      return true
    } else if (posts.isFetching) {
      return false;
    }
      else {
        return posts.didInvalidate
      }
  }

  export function  fetchPostsIfNeeded(subreddit) {
    //Using redux thunk, we also recieve getState()
    //using which we can choose what to dispatch next.

    //This is useful for avoiding a network request if cached
    //value is already available.

    return (dispatch, getState) => {
      if( shouldFetchPosts(getState(),subreddit) ){
        //Dispatching a thunk from a Thunk
        return dispatch(fetchPosts(subreddit))
      } else {
        //Let calling code know there is nothing to wait for.
        return Promise.resolve();
      }
    }
  }

}
