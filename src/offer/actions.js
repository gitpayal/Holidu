export const GET_OFFERS = 'GET_OFFERS';
export function getOffers() {
  return {
    type: GET_OFFERS,
  };
}

export const GET_OFFERS_REQUEST = 'GET_OFFERS_REQUEST';
export function getOffersRequest() {
  return {
    type: GET_OFFERS_REQUEST,
  };
}

export const GET_OFFERS_SUCCESS = 'GET_OFFERS_SUCCESS';
export function getOffersSuccess(data) {
  return {
    type: GET_OFFERS_SUCCESS,
    data,
    result: data.result,
  }
}

export const GET_OFFERS_FAILURE = 'GET_OFFERS_FAILURE';
export function getOffersFailure(error) {
  return {
    type: GET_OFFERS_FAILURE,
    error,
  }
}
