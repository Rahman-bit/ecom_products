
const cartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {

    let { id, color, quantity, product } = action.payload;

    // tackle the existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    // console.log('CartProduct:', state.cart)
    // console.log('existingProduct:', existingProduct)

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        // console.log('curElem:',curElem)
        if (curElem.id === id + color) {

          let newAmount = curElem.quantity + quantity;
        //  console.log('=======', curElem.quantity, quantity)
          if (newAmount >= curElem.max) {
            // console.log('curElem.max:',curElem.max)
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            quantity: newAmount,
          }
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      
      let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          quantity,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.quantity - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          quantity: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.quantity + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          quantity: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { quantity } = curElem;
  //     initialVal = initialVal + quantity;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     totalItem: updatedItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, quantity } = curElem;
  //     initialVal = initialVal + price * quantity;
  //     // 25000 + 0 = 25000
  //     // 10199 + 25000 = 121

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     totalPrice: total_price,
  //   };
  // }

  if(action.type === 'CART_ITEM_PRICE_TOTAL'){
    let {totalItem, totalPrice} = state.cart.reduce((acc, curElm)=>{
      const{quantity,price } = curElm;

      acc.totalItem += quantity;

      acc.totalPrice += price * quantity;

      return acc

    },{ totalItem :0, totalPrice:0 })

    return {
      ...state,
      totalItem,
      totalPrice
    }
  }

  return state;
};

export default cartReducer;