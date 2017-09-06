import React from 'react'; //React is based on two libraries <- making components
import ReactDOM from 'react-dom'; ///Rendering components to the browser.

import SearchBar from './components/search_bar.js';

// Create a new component , produce some HTML.
const api_key = 'AIzaSyCNHxbJ0sEJyNO-wtbSaWTi-8HpqnAQO2o';

const App = function() {
    return (
    <div > 
         <SearchBar/>
    </div>
    );
}

//Put the component on the DOM.
ReactDOM.render(<App/> , document.querySelector('.container'));