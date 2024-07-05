export const AddToCart = (Product,quantity,varients) =>(dispatch,getState) =>{
    var cartItems={
        name:Product.name,
        _id:Product._id,
        image:Product.image,
        varient:varients,
        quantity:quantity,
        prices:Product.prices,
        price:Product.prices[0][varients] * quantity,
    };

    dispatch({type:"ADD_TO_CART", payload:cartItems});
    localStorage.setItem('cartItems',JSON.stringify(getState().CartReducer.cartItems))
}