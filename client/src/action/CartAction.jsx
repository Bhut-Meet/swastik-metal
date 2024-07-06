export const AddToCart =
  (Product, quantity, varient) => (dispatch, getState) => {
    var cartItems = {
      name: Product.name,
      _id: Product._id,
      image: Product.image,
      varient: varient,
      quantity: Number (quantity),
      prices: Product.prices,
      price: Product.prices[0][varient] * quantity,
    };
    
    if(cartItems){
      if(cartItems.quantity < 10 ){
        dispatch({type:'DELETE_FROM_CART',payload:Product})
      }
      else{
        dispatch({ type: 'ADD_TO_CART', payload: cartItems });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().CartReducer.cartItems)
      );
      }
    }
};

export const deleteFromCart = (Product) => (dispatch,getState) =>{
  dispatch({type:'DELETE_FROM_CART',payload:Product})
  const cartItems = getState().CartReducer.cartItems
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
}