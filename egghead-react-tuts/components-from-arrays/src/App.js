import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {items:[]}
  }
  
  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then( r => r.json() )
      .then( ( {results:items} ) => this.setState( {items} ) )
  }

  filter(e) {
    this.setState({filter: e.target.value})
  }
  
  render() {
    //Nice way for rendering / filtering selectively based on state.
    let items= this.state.items
    //If state.filter is not a falsy value, filters the list. using filter method
    if(this.state.filter) {
      items = items.filter ( item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      //KEY IS NEEDED AMONGST SIBLINGS OF SAME COMPONENT, 
      //THUS NEEDED HERE.
      <div className="App">
        <input type='text' onChange={this.filter.bind(this)} />
       { items.map( item => <Person key={item.name} person ={item}/> ) }
      </div>
    );
  }
}


const Person = (props) => <h4>{props.person.name}</h4>
export default App;
