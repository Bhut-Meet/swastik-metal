import axios from 'axios'

export const getAllProduct = () => async (dispatch) =>{
    dispatch({type:'GET_PRODUCT_REQUEST'})
    try {
        const res = await axios.get("/api/auth/getproducts")
        console.log(res);
        dispatch({type:'GET_PRODUCT_SUCCESS',payload:res.data})
    } catch (error) {
        dispatch({type:'GET_PRODUCT_FAIL',payload:error})
    }
};