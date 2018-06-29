

import { createStore, 
  applyMiddleware, 
  } from 'redux';

import  combineReducers  from '../src/reducers/combined';
import thunk from 'redux-thunk';

export default createStore(
combineReducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(thunk)
);