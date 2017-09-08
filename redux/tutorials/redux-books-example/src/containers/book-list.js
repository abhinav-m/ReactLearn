import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';

import {selectBook} from '../actions/index';


 class BookList extends Component {
    renderList(){
        return this.props.books.map( book => {
            return(
                <li key={book.title} 
                className="list-group-item"
                onClick = { () => this.props.selectBook(book) }>
                {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
            {this.renderList()}
            </ul>
        )
    }
}

//This function takes the value of state, and makes it available as PROPS to the component.
//CAN BE UNDERSTOOD AS GLUE BETWEEN REACT AND REDUX.
//IF STATE CHANGES, CONTAINER (BOOKLIST) WILL RE RENDER AUTOMATICALLY AGAIN.
//IF STATE CHANGES, THE OBJECT RETURNED BELOW WILL BE ASSIGNED NEW STATE AS THE OBJECT.
function mapStateToProps(state) {
    //whatever is returned here will show up as props in bookList
  return {
      books:state.books
  };
}

//Anything returned from this function  will end up as props 
//on the BookList container.
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the action is dispatched to all of our reducers
    return bindActionCreators({selectBook:selectBook},dispatch); // Binding the action creator to the dispatch function.
}

//Promote BookList from component to container, it needs to know about the new dispatch method, selectBook.
//Makes it available as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList); 
// Connect function is from react-redux ( the connection between react and redux. )
//Connect takes a function and component , and produces a container. (A component AWARE of the state contained by redux.)