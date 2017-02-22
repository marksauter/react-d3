import * as types from './constants';

export const setSubject =
  text => {
    return (
      { type: types.SET_SUBJECT
      , text
      }
    );
  };

export default
  { setSubject
  };
