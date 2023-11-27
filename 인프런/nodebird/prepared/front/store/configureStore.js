import { createWrapper } from "next-redux-wrapper"
import { createStore, applyMiddleware, compose } from "redux";
import { copmoseWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers'

//configureStore.js
const configureStore = () => {
  // const middlewares = [];
  const enhancer = process.env.NODE_EVN === 'production'
    ? compose(applyMiddleware())
    : compose(applyMiddleware())

  const store = createStore(reducer, enhancer)
  return store
}

const wrapper = createWrapper(configureStore);

export default wrapper;