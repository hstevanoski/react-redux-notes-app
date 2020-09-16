import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

export default createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
