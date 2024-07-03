// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
// };

const getAllProductReducer = (state = {products:[]}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        // ...state,
        products: action.payload,
        loading: false,
      };
    case 'GET_PRODUCTS_FAIL':
      return {
        // ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state; 
  }
};

// Ensure you export the reducer
export { getAllProductReducer };
