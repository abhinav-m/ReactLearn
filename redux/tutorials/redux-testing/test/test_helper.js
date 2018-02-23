//CHAI -> to write tests(expect keyword) eg, expect(compo).to.be.instanceOf(array)
//MOCHA -> Runs tests, handle errors, testing apparatus.

import jsdom from 'jsdom'; // Library to emulate DOM (browser) behaviour on node.js;
import _$ from 'jquery';  // '_$' is a variable which we use to reference jquery.
import TestUtils from 'react-addons-test-utils'; // This is used to make the renderComponent method, needed to simulate react components.(renderIntoDocument method)
import ReactDOM from 'react-dom'; //Used to get the actual DOM node(html) referred to by our component instance.
import chai ,{ expect } from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

//1. Set up testing environment to run like a browser in the command line.

//App runs on browser using bundle.js testing suite shows specs on terminal. Thus we setup jquery to run in the command line without the DOM.
//These global variables are referred to by jquery to run it's tests and emulate the DOM.
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //Create an HTML doc to be used as DOM for the terminal, assign to global variable document.
global.window = global.document.defaultView;


//Instruct jquery to run with global.window as its DOM ,and not the normal browser DOM which it uses.
// which we created above, we reference to the instance as '$'.
//We can use all of jquery's commands by referencing '$'.
const $ = _$(window);

//2.Build 'renderComponent' helper, that should render a given react class , and wrap it within a jquery element.
//Here we will use the above DOM which we initialised, since TestUtils renderIntoDocument method requires a global document variable to run.
function renderComponent(ComponentClass, props ={}, state={}) { //components need state and props to render sometimes, hooked up to redux store.
  //Hooking up redux store to our component in case it requires props.
  //Using JSX to get the isntance of our class
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); //We wrap the DOM node with jquery and return it so it can be used by the chai library.
}

//3.Build helper for simulating events
//Adding simulate function to jquery , so it is available to all jquery instances.
$.fn.simulate =  function (eventName,value) {
  //From test utils docs, we refer to the eventName we want to be able to simulate with the value provided here.
  if(value){
    this.val(value); //If value is passed, set the jquery reference of the html elements value to the value passed.
  }
  //Since this can contain an array of elements in jquery, we refer to the first element with [0]
 TestUtils.Simulate[eventName](this[0]);
}



//4.Set up chai-jquery
//Setting up chaiJquery library with our instance of jquery setup above.
chaiJquery(chai, chai.util,$);


export {renderComponent , expect };
