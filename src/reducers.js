import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { subject } from './containers/Home/reducers';

const rootReducer =
  combineReducers(
    { subject
    , routing
    }
  );

export default rootReducer;
