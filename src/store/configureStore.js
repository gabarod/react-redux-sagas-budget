import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducers from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import modalReducer from "../reducers/modal.reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
  const combinedReducers = combineReducers({
    entries: entriesReducers,
    modals: modalReducer,
  });
  const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
initSagas(sagaMiddleware);
  return store;
};

export default configureStore;
