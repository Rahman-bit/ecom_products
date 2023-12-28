
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from '../reducers/CartReducer'

const CartContext = createContext();

const getLocalStorageData = ()=>{
    let localStorageItems = localStorage.getItem('cartItem')

    // if(localStorageItems === ''){
    //     return []
    // }else{
    //     return JSON.parse(localStorageItems)
    // }

    const parseData = JSON.parse(localStorageItems)

    if(!Array.isArray(parseData)) return []

    return parseData;
}

const initialState ={
    // cart : [],
    cart : getLocalStorageData(),
    totalItem : '',
    totalPrice : '',
    shippingFee : 50000
}
const CartContextProvider = ({ children })=>{
    
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const addToCartProduct = (id, color, quantity, product)=> {
        // console.log('======',id, color, quantity, product)
        dispatch({type : "ADD_TO_CART", payload :{id, color, quantity, product}})
    }
    // increment and decrement the product

  const setDecrement = (id) => {
    // console.log("setDecrement: id==", id)
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    // console.log("setIncrement: id==", id)
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

    const removeItem = (id)=>{
        // console.log('CurrItem:', id)
        dispatch({type : "REMOVE_ITEM", payload: id})
    }

     // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    useEffect(()=>{
        dispatch({type: 'CART_ITEM_PRICE_TOTAL'})
        // dispatch({type : 'CART_TOTAL_ITEM'})
        // dispatch({type:'CART_TOTAL_PRICE'})
        localStorage.setItem('cartItem', JSON.stringify(state.cart))
    },[state.cart])

    return (
        <CartContext.Provider value={{...state, addToCartProduct,setDecrement,setIncrement,clearCart, removeItem}}>
            { children }
        </CartContext.Provider>
    )
}

const useCartContext = ()=>{
    return useContext(CartContext)
}

export { CartContextProvider, useCartContext}




// my day started with checking emails, 
// attend the daily scumb calls, 
// code review, 
// discuss team members for feature development,
// bug fixing.
// push code to production.