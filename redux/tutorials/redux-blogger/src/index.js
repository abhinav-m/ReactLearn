import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch> //Switch component takes a collection of routes, and renders the FIRST route that matches the current url in the below order.
          <Route path='/posts/new' component={PostsNew} /> //If we dont use switch component from 'react-router'  route '/' will also be displayed whenever '/' is present in the route.
          <Route path = '/posts/:id' component={PostsShow} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
