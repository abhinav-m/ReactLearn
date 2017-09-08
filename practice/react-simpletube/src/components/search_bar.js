import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
     return   (
            <div className= 'search-bar'>
         <input 
         value = {this.state.term}  //This is known as a controlled component. Note that the value of the input depends on the state,
                                    // thus on setState() call, this will be re rendered and it's value assigned as this.state.term
                                    //thus it's value is 'controlled' by the state. Thus, changing the state -> causes element to rerender ->  causes it to have new value.
         onChange = { event => this.onInputChange(event.target.value) }/>
       </div>)
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;