import { createStore, combineReducers,applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import {getAllProductReducer} from './reducers/Products';

const rootReducer = combineReducers({
  products: getAllProductReducer,
  // Add other reducers here
});

const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
);

export default store;
