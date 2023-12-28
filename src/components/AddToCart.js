import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from '../context/CartContext';

const AddToCart = ({ product }) => {

  const { addToCartProduct } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setAmount] = useState(1);

  // console.log("addToCartProduct product:", product)
  const setDecrease = () => {
    quantity > 1 ? setAmount(quantity - 1) : setAmount(1);
  };

  const setIncrease = () => {
    quantity < stock ? setAmount(quantity + 1) : setAmount(stock);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to={"/cart"}
        onClick={() => addToCartProduct(id, color, quantity, product)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
`;

export default AddToCart;
