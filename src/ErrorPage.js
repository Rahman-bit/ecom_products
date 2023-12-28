import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
           <h2>404</h2>
           <h3>UH OH! You'r Lost.</h3>
           <p>Visite Our Shop Page By click the bellow button.</p>
           <Button>
            <NavLink to={'/shop'}> Go TO Shop</NavLink>
           </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    margin: 5rem 0;
    text-align: center;
  }
  h2,p {
    margin: 2rem 0;
  }
`

export default ErrorPage;

