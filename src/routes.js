import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/Main';
import Home from './containers/Home';
import About from './containers/About';

const routes =
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={Home} />
  </Route>;

export default routes;
