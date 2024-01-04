import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import {Button} from '../styles/Button';
// import { useProductContext } from '../context/Productcontext';

const HeroSection = ({heroTitle}) => {
    const{ name, img } = heroTitle;
    // const myname = useProductContext();

    // console.log("myname:", myname)
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <h1>{ name }</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <NavLink to={'/shop'}>
                    <Button>Shop Now</Button>
                </NavLink>
            </div>
            {/* Hero section img */}
            <div className='hero-section-image'>
                <figure>
                <img
                    src={img}
                    alt="hero-section-photo"
                    className="img-style"
                />
                </figure>        
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0 5rem;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 5rem 0;
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection
