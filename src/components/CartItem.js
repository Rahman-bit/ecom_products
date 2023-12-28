import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';

const CartItem = (props) => {
    const { removeItem, setDecrement, setIncrement } = useCartContext();
    const{ id, name, image, color, price, quantity } = props
    // console.log("cart items:", id)

    // if(props === ''){
    //     return <div>Cart is empty</div>
    //   }
    // const setDecrease = () => {
        // quantity > 1 ? setAmount(quantity - 1) : setAmount(1);
      // };
    
      // const setIncrement = () => {
        // quantity < stock ? setAmount(quantity + 1) : setAmount(stock);
      // };

  return (
    <div className='cart-heading grid grid-five-column'>
        {/* image */}
      <div className='cart-image--name'>
        <div>
            <figcaption>
                <img src={image} alt={id} />
            </figcaption>
        </div>
        <div>
            <p>{name}</p>
            <div className='color-div'>
                <p>color:</p>
                <div className='color-style'
                 style={{backgroundColor: color, color: color}}
                ></div>
            </div>
        </div>
      </div>

      {/* Price */}
      <div className='cart-hide'>
        <p><FormatPrice price={price} /></p>
      </div>

      {/* Quantity */}
      <CartAmountToggle
        quantity={quantity}
        setDecrease={()=> setDecrement(id)}
        setIncrease={()=> setIncrement(id)}
      />

      {/* Cart Sub total */}
      <div className='cart-hide'>
        <p><FormatPrice price={ price * quantity }/></p>
      </div>

      {/* Delete Button */}
      <div>
        <FaTrash className='remove_icon' onClick={()=> removeItem(id)}/>
      </div>
    </div>
  )
}

export default CartItem;
