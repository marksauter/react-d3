import { SET_SUBJECT } from './constants';

const initialState = 'World';

export const subject =
  (state = initialState, action) => {
    switch (action.type) {
      case SET_SUBJECT:
        return action.text;
      default:
        return state;
    }
  };
