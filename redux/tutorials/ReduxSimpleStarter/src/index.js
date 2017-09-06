import React from 'react'; //React is based on two libraries <- making components
import ReactDOM from 'react-dom'; ///Rendering components to the browser.
// Create a new component , produce some HTML.

const App = function() {
    return <div > Hi! </div>
}

//Put the component on the DOM.
ReactDOM.render(<App/>,document.querySelector('.container'));