import axios from 'axios';

// Accept API as a parameter
export const getAllProducts = (API) => async (dispatch) => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' });
  try {
    const { data } = await axios.get(`${API}/api/auth/getallproduct`);
    console.log(data); // Check the structure of the fetched data
    dispatch({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_PRODUCTS_FAIL',
      payload: error.message,
    });
  }
};
