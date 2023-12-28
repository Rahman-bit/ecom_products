import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <LogoImg src='https://possible.in/wp-content/uploads/2020/10/logo.png' alt='logo' />
      </NavLink>
      <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding : 0 4.8rem;
    height : 7rem;
    background-color : ${({theme})=> theme.colors.bg};
    display : flex;
    justify-content : space-between;
    align-items : center;
    position : relative;

    .logo{
        height : 5rem
    }
`
const LogoImg = styled.img`
    width : 140px;
`

export default Header
