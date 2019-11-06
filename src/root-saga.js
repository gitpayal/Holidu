import { all } from "redux-saga/effects";

import offerSaga from "./offer/sagas";

export default function* rootSaga() {
  yield all([offerSaga]);
}
