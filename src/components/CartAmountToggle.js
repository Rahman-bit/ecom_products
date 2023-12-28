import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styled from 'styled-components'

const CartAmountToggle = ({quantity, setDecrease, setIncrease }) => {
  return (
    <Wrapper className='cart-button'>
        <div className='quantity-toggle'>
            <button onClick={()=> setDecrease()}><FaMinus /> </button>
            <div className='quantity-style'>{quantity}</div>
            <button onClick={()=> setIncrease()}><FaPlus /> </button>
        </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* we can use it as a global one too  */
  .quantity-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .quantity-style {
      font-size: 2.4rem;
      color: #4a4a4a;
    }
  }
`


export default CartAmountToggle
