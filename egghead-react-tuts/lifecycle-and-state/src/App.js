import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val:0}
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({
      val : this.state.val + 1
    })

  }
  //Below are lifecycle methods or hooks which can be used 
  //to do different actions during a component's lifecycle.

//Component added to DOM -> Mounting
//Fires before component is mounted into DOM.
  componentWillMount() {
    console.log('componentWillMount');
    this.setState({m:2})
     //Here the DOMNode WONT be  accessible since component has not  been mounted.
     //to the DOM, will log null.
    console.log(ReactDOM.findDOMNode(this))
    //Since constructor has been called, we can access and add state here to the component
  }
  //Render is called on every state change.
  render() {
   console.log('render');
   return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

//Fires after component is mounted into DOM.
  componentDidMount() {
    console.log('componentDidMount')
    //ReactDom.findDomNode  requires a component, and returns a DOMNode.
    //Here the DOMNode is accessible since component has been mounted.
    console.log(ReactDOM.findDOMNode(this))
    //Setting an interval to update state automatically.
    this.inc = setInterval(this.update,500)
  }

//Component removed from DOM -> Mounting
  componentWillUnmount() {
    console.log('componentWillUnmount')
    //Clearing here.
    clearInterval(this.inc)
  }

}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />,document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return(
      <div>
        <button onClick ={this.mount.bind(this)}>Mount</button>
        <button onClick ={this.unmount.bind(this)}>UnMount</button>
        <div id='a'></div>
      </div>
    )
  }
}

export default Wrapper;
