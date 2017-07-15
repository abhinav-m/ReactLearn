import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      
     <Button>I <Hearts /> React</Button>
    );
  }
}

const Button = (props) => <button> {props.children} </button>

class Hearts extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}

export default App;
