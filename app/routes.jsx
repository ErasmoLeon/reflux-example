import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./app.jsx')}>
    <DefaultRoute name='/users/profile' handler={require('./components/users/Profile.jsx')} />
    <NotFoundRoute handler={require('./components/pages/notFound.jsx')} />
  </Route>
);

