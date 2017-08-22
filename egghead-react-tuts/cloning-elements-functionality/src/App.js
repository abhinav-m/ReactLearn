import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <Buttons>
     <button value='A'> A </button>
     <button value='B'> B </button>
     <button value='C'> C </button>
     </Buttons>
    );
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {selected: 'None'}
  }

  selectItem (selected) {
    this.setState({selected})
  }

  render() {
    /*We cant do child => child.onClick
      As this.props.children is only a descriptor it does NOT represent the 
      actual children of the component,
      thus can't add methods/props to those components
      React.cloneElement can be used to create a component from a given child object descriptor
      we can also set it's specific properties 
      thus here we are creating the components and mapping it into our items, and using that in our inner component. */
    let fn = child =>
      React.cloneElement(child , {
        onClick : this.selectItem.bind(this,child.props.value)
      })

      let items = React.Children.map(this.props.children,fn)
    return  (
      <div>
        <h2> You have selected: {this.state.selected} </h2>
        {items}
      </div>
    )
  }
}

export default App;
