//Sample code for creating a simple store !

//Take the reducer function

const createStore = reducer => {
  //state and listeners array to subscribe to.
  let state;
  let listeners = [];

  //getState function that returns current state.
  const getState = () => state;

  //dispatch method which takes an action,
  // and applies it to the reducer , producing a new state
  //Every listener is called after this.
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  //subscribe function, pushes the listener into our current listeners
  //array.
  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  //Return store object with the relevant methods.
  return { getState, dispatch, subscribe };
};
