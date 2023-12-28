import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>

      <NavLink to={'/shop'}>Shop</NavLink> /{title}

    </Wrapper>
  )
}

const Wrapper = styled.section`
    height : 5rem;
    width : 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
    
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 15px;
    }
`

export default PageNavigation
