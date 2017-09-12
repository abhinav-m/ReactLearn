import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeinSecs:0,
      intervalID: null
    }
    this.tick = this.tick.bind(this);
  }


  tick() {
    this.setState( {
      timeinSecs : this.state.timeinSecs + 1
    } );
  }

  stopWatch() {
    clearInterval(this.state.intervalID);
    this.setState({
      timeinSecs:0,
      intervalID: null
    })
  }

  startWatch() {
    if(!this.state.intervalID)
    {
      let intervalID =  setInterval(this.tick,1000);
      this.setState({
        intervalID
      });
    }

  }

  render() {
    return(
      <div>
        {this.state.timeinSecs}
        <button onClick = {() => this.stopWatch() }> Stop </button> <button onClick= { () => this.startWatch()}>Start</button>
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
  <div>
    <Clock/>
    <Clock/>
  </div>
    );
  }
}

export default App;
