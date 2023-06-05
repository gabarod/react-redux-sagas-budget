import { delay, put, take, call, fork } from "redux-saga/effects";

function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    yield delay(1000);
    yield take("TEST_MESSAGE");
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(3);
    console.log(b);
    console.log("I'm a saga function");
  }
}

function* doNothing() {
  console.log("I have been called");
  yield delay(1000);
  console.log('I"m doing nothing');
}

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE_2" });
  }
}
