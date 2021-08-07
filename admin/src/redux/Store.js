import RootReducer from './RootReducer.js';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

// import { createStore, applyMiddleware, compose } from 'redux'
// create the saga middleware
// const store = compose(
//   window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(RootReducer);

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: RootReducer,
  sagaMiddleware,
});

export default store;