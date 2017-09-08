// State argument is not application state, only state this reducer is RESPONSIBLE for.
export default function(state = null, action) {
    switch (action.type) {
        //Always return a fresh object, DONT MUTATE state object.
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}