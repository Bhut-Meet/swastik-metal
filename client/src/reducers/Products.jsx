export const getAllProductReducer = (state = {} , action)=>{
    switch (action.type) {
        case 'GET_PRODUCT_REQUEST':
            return{
                ...state
            }
            // break;
        case 'GET_PRODUCT_SUCCESS':
            return{
                products:action.payload
            }
        case 'GET_PRODUCT_FAIL':
            return{
                error:action.payload
            }
        default: return state
            // break;
    }
}