import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes, {
  populateEntries,
  populateEntryDetail,
} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");
  console.log(result);
  yield put(populateEntries(result.data));
}

function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log(data);
  yield put(populateEntryDetail(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
