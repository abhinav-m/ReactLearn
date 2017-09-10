import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew  extends Component {

  renderTitleField(field) {
  return (
    <div>
    <input
    type='text'
    {...field.input} //using spread syntax to assign all the props passed in field.input.
    />
    </div>
  );
  }

  render() {
    return(
  <form>
    <Field //Distinct input rendered on screen.
    name='title' //binds title to state this FIELD will produce for form state.
    component={this.renderTitleField} //How will the field be rendered?
    />
    </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm' //Show this form (unique per page)
}) (PostsNew);
