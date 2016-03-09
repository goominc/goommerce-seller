import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import OrderList from './containers/OrderList';
import Signin from './containers/Signin';

export default function configure({ getAuth }) {
  function redirectToLogin(nextState, replace) {
    if (!getAuth().bearer) {
      replace('/signin');
    }
  }

  return (
    <Route>
      <Route component={App} onEnter={redirectToLogin}>
        <Route component={OrderList} path="/" />
      </Route>
      <Route component={Signin} path="/signin" />
    </Route>
  );
}
