import merge from "lodash/merge";

import { GET_OFFERS_SUCCESS } from "../offer/actions";


import { fromJS } from 'immutable';
export const INITIAL_STATE = fromJS({});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_OFFERS_SUCCESS:
      const { entities } = action.data;
      return merge(state, entities);
    default:
      return state;
  }
}
