import { createStore, combineReducers,applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import {getAllProductReducer} from './reducers/Products';
import { CartReducer } from './reducers/CartReducer';
const rootReducer = combineReducers({
  products: getAllProductReducer,
  CartReducer :CartReducer
  // Add other reducers here
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

const initialState = {
  CartReducer:{
    cartItems:cartItems
  }
}

const store = createStore(
  rootReducer,
  initialState,
  (applyMiddleware(thunk))
);

export default store;
