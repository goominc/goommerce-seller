import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import OrderList from './containers/OrderList';
import SelectBrand from './containers/SelectBrand';
import Signin from './containers/Signin';

const _ = require('lodash');

export default function configure({ getAuth }) {
  function redirectToLogin(nextState, replace) {
    if (!getAuth().bearer) {
      replace('/signin');
    }
  }

  function redirectToDefault(nextState, replace) {
    const brands = _.filter(getAuth().roles,
      (r) => r.type === 'owner' || r.type === 'staff').map((r) => r.brand);
    if (brands.length === 1) {
      replace(`/brands/${brands[0].id}`);
    }
  }

  return (
    <Route>
      <Route onEnter={redirectToLogin}>
        <Route component={App} path="/brands/:brandId">
          <Route component={OrderList} path="" />
        </Route>
        <Route component={SelectBrand} path="/" onEnter={redirectToDefault} />
      </Route>
      <Route component={Signin} path="/signin" />
    </Route>
  );
}
