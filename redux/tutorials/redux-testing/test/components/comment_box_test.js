import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox' , () => {
  //Must be declared here due to scoping.
 let component;
//Before each runs before all of the 'it' statements, here it will run 3 times. (DRY principle.)
//Before each will also be applicable to the nested describe statement.
  beforeEach( () => {
    //Render component returns jquery object containing react component therefore, we can use jquery methods on it.
     component = renderComponent(CommentBox);
  });

it('has the correct class', () =>{
  expect(component).to.have.class('comment-box');
})

it('has a text area',() => {

  expect(component.find('textarea')).to.exist;
});

it('has a button' , () => {
  expect(component.find('button')).to.exist;
});


describe('entering some text', () => {
  //Both 'beforeEach' functions will be executed for EACH 'it' statement in this nested describe function.
  beforeEach( () => {
    //simulates 'change' event on the 'textarea' found, with the text 'new component', this will trigger setState call in the component.
    component.find('textarea').simulate('change','new comment');
  });

  it('shows that text in the text area' , () => {
    expect(component.find('textarea')).to.have.value('new comment');
  });

  it('when submitted, clears the input' , () => {
    component.simulate('submit');
    expect(component.find('textarea')).to.have.value('');
  });

});

});
