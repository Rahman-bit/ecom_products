import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {FiShoppingCart} from 'react-icons/fi'
import {CgMenu, CgClose } from 'react-icons/cg'
import { useCartContext } from '../context/CartContext'

const Nav = () => {
    const[menuIcon, setmenuIcon] = useState();
    const{ totalItem } = useCartContext()
  return (
    <NavItem>
        <div className={menuIcon ? 'navbar active' : 'navbar' }>
        <ul className='navbar-lists'>
            <li>
                <NavLink to='/' className='navbar-links' onClick={()=> setmenuIcon(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/shop' className='navbar-links' onClick={()=> setmenuIcon(false)}>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/about' className='navbar-links' onClick={()=> setmenuIcon(false)}>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className='navbar-links' onClick={()=> setmenuIcon(false)}>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/cart' className='navbar-links cart-trolley-link'>
                    <FiShoppingCart className='cart-trolley'/>
                    <span className='cart-total-item'>{ totalItem }</span>
                </NavLink>
            </li>
        </ul>
        {/* Responsive navbar for mobile device btns*/}
        <div className='mobile-navbar-btn'>
            <CgMenu name= 'menu-outline' className='mobile-nav-icon' onClick={()=> setmenuIcon(true)}/>
            <CgClose name= 'close-outline' className='mobile-nav-icon close-outline' onClick={()=> setmenuIcon(false)}/>
        </div>
        </div>
    </NavItem>
  )
}

const NavItem =styled.nav`
    .navbar-lists{
        display : flex;
        align-items : center;
        gap : 4.8rem;   
    }
    .navbar-links{
        &:link,
        &:visited{
            display: inline-block;
            text-decoration: none;
            font-size:1.8rem;
            font-weight: 500;
            text-transform: capitalize;
            color:${({theme})=> theme.colors.black};
            transition:color 0.3s linear;
        }

        &:hover,
        &:active{
            color:${({theme})=> theme.colors.helper};
            transition:color 0.3s linear;
        }
    }
    .navbar-links li:not(:last-child):a{
        &:hover,
        &:active{
            color:${({theme})=> theme.colors.helper};
            border-bottom: none !important;
        }
    }
    .cart-trolley-link{
        position: relative;
    }
    .cart-trolley{
        position : relative;
        font-size : 2.4rem;
    }
    .cart-total-item {
        width : 2.4rem;
        height : 2.4rem;
        padding : 2px 2px;
        position : absolute;
        background-color : #000;
        color : #000;
        border-radius : 50%;
        display : grid;
        place-items : center;
        top : -30%;
        left : 77%;
        background-color: rgb(252 165 192);
    }
    .mobile-navbar-btn{
        display : none;
        background-color: transparent;
        cursor : pointer;
        border : none;
    }
    .mobile-nav-icon[name="close-outline"]{
        display : none;
    }
    .close-outline {
        display : none;
    }
  
    .user-login-name{
        text-transform: capitalize;
    }
    .user-logout,
    .user-login{
        font-size: 1.4rem;
        padding : 0.8rem 1.4rem;   
    }


    @media (max-width: ${({theme})=> theme.media.mobile}){
        .mobile-navbar-btn{
            display:inline-block;
            z-index : 999999;
            border: ${({theme})=> theme.colors.black});
        }
        .mobile-nav-icon{
            font-size: 4.2rem;
            color:${({theme})=> theme.colors.black});
        }
        .active .mobile-nav-icon{
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color:${({theme})=> theme.colors.black});
            z-index:9999;
        }
        .active .close-outline{
            display: inline-block;
        }
        .navbar-lists{
            width : 100vw;
            height : 100vh;
            position : absolute;
            top : 0;
            left : 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            visibility:hidden;
            opacity: 0;
            transform: translateX(100%);
        }
        
        .active .navbar-lists{
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            background-color : #e3e3e3
        }
    }
    
    
`
export default Nav
