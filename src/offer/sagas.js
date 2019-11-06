import { put, call, takeLatest } from 'redux-saga/effects';
import OfferService from './service';
import { 
  GET_OFFERS,
  getOffersRequest,
  getOffersSuccess,
  getOffersFailure,
} from './actions';

export function* getOffersSaga() {
  yield put(getOffersRequest());
  try {
    const data = yield call(OfferService.getOffers);
    yield put(getOffersSuccess(data));
  } catch (error) {
    yield put(getOffersFailure(error));
  }
}

const sagas = [
  takeLatest(GET_OFFERS, getOffersSaga),
];

export default sagas;
