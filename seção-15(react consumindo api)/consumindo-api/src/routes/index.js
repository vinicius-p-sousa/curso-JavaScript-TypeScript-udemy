import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login/login';
import Page404 from '../pages/page404/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="*" component={Page404} isClosed />
    </Switch>
  );
}
