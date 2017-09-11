import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost } from '../actions';

class PostsNew  extends Component {
  //field.meta.touched means user focused the input, then focused away from it, tracked by reduxForm.
  renderField(field) {
    const { meta: {touched , error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger': ''}`
  return (
    <div className= {className}>
      <label>{field.label}</label>
    <input
      className='form-control'
    type='text'
    {...field.input} //using spread syntax to assign all the props passed in field.input.
    />
  <div className='text-help'>
  {touched ? error : ''}
  </div>
    </div>
  );
  }

onSubmit(values) {
  console.log(values);
      //to navigate back to the root route.
  this.props.createPost(values, ()=> { this.props.history.push('/'); });
}

  render() {

    const { handleSubmit } = this.props;

    return(
    // handlesubmit runs the validation procedure of redux form , then calls the callback to do the submission.
  <form onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
    <Field //Distinct input rendered on screen.
      label='Title for post'
    name='title' //binds title to state this FIELD will produce for form state.
    component={this.renderField} //How will the field be rendered?
    />
    <Field //Distinct input rendered on screen.
      label ='Categories'
    name='categories' //binds title to state this FIELD will produce for form state.
    component={this.renderField} //How will the field be rendered?
    />
    <Field //Distinct input rendered on screen.
      label ='Post content'
    name='content' //binds title to state this FIELD will produce for form state.
    component={this.renderField} //How will the field be rendered?
    />
  <button type ='submit' className = 'btn btn-primary'>Submit</button>
  <Link to = '/' className = 'btn btn-danger'>Cancel</Link>
    </form>
    );
  }
}

//Whenever user tries to submit form, validate function is called.
function validate(values) {  //values-> all different values user has entered in form fields.
  const errors = {};

  //Validate the inputs from 'values'
  //Return the errors. (if errors is empty, form is fine. else if it has ANY properties, it is failing.)
 if(!values.title ) {
   errors.title ='Enter a title!';
 }

 if(!values.categories) {
   errors.categories ='Enter some categories!';
 }

 if(!values.content) {
   errors.content ='Enter some content!';
 }
return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //Show this form (unique per page)
}) (
  connect(null,{ createPost })(PostsNew) // Returns component from connect function which is valid to use within redux form.
);
