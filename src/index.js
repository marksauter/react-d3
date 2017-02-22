import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './configureStore';
import renderer from './configureFela';
import Root from './Root';

const store = configureStore();

render(
  <AppContainer>
    <Root
      store={store}
      renderer={renderer}
    />
  </AppContainer>
, document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(
    './Root'
  , () => {
      const RootContainer = require('./Root').default;
      render(
        <AppContainer>
          <RootContainer
            store={store}
            renderer={renderer}
          />
        </AppContainer>
      , document.getElementById('root')
      );
    }
  );
}
