export default function( {dispatch} ){
  return next => action => {
    //Action doesnt have a payload, or not a promise(no .then property.)
    if( !action.payload || !action.payload.then) {
      return next(action); //Must pass the action to next middleware in the chain, if this middleware doesnt deal with it.
    }
    //Next function ->  go to next middleware.
    //Dispatch -> dispatch action for entire cycle of middlewares again.

   //Make sure action's promise is resolved.
   action.payload
    .then(response => {
      //Create the new action with the RESPONSE as the payload and all the old data.
      //WE send this action back to all the middlewares, to maek sure if something else needs being handled is handled.
      //Thus, our PROMISE middleware handles the response.
    const newAction =  {...action, payload:response};
    dispatch(newAction);
    })
  }
}
