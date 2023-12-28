import React from 'react'
import styled from 'styled-components'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { FiDatabase } from 'react-icons/fi';
const Trusted = () => {
  return (
    <Wrapper>
      <h3> Frontend Technologies</h3>
      <div className='trustedCompanies'>
        <IoLogoJavascript />
        <FaReact />
        <TbBrandNextjs />
        <FiDatabase />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  padding : 5rem 0;
  background-color: ${({theme})=> theme.colors.bg};

  .trustedCompanies{
    display: flex;
    justify-content: space-evenly;
    padding: 5rem 0;
    font-size: 3rem;
  }
 
`

export default Trusted
