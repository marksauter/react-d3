import React from 'react';
import { Provider as Redux } from 'react-redux';
import { Provider as Fela } from 'react-fela';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import DevTools from './containers/DevTools';
import routes from './routes';

const Root =
  ({ store, renderer }) => {
    const mountNode = document.getElementById('stylesheet');
    const history =
      typeof document !== 'undefined' ?
        syncHistoryWithStore(browserHistory, store) : undefined;
    return (
      <Redux store={store}>
        <Fela renderer={renderer} mountNode={mountNode}>
          <div>
            <Router history={history} routes={routes} />
            <DevTools />
          </div>
        </Fela>
      </Redux>
    );
  };

export default Root;
