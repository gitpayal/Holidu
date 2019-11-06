import {
  GET_OFFERS_REQUEST,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
} from './actions';

import { fromJS } from 'immutable';
export const INITIAL_STATE = fromJS({ result: [] });

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_OFFERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.result,
      };
    case GET_OFFERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
