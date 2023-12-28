import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <Wrapper>
      <div className='contact-short'>
        <div className='grid grid-two-column'>
            <div className='grid getstarted'>
                <h3>Ready To Get Started</h3>
                <h3>Talk To Our Experts</h3>
            </div>
            <div className=''>
                <Button>
                  <NavLink to={'/contact'}>Get Started</NavLink>
                </Button>
            </div>
        </div>
      </div>
      {/* Main footer section */}
      <footer>
        <div className='container grid grid-four-column'>
            <div className='footer-about'>
                <h3>Possible Wellness PVT</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='footer-subscribe'>
                <h3>Subscribe To Our Possible Channel</h3>
                <form action='#'>
                    <input type='email' name="email" placeholder='Your Email' required></input>
                    <input type='submit' value={'Subscribe'}></input>
                </form>
            </div>
            <div className='footer-social'>
                <h3>Follow Us</h3>
                <div className='footer-social--icons'>
                    <div>
                        <FaDiscord className='icons' />
                    </div>
                    <div>
                        <FaInstagram className='icons' />
                    </div>
                    <div>
                        <FaYoutube className='icons' />
                    </div>
                </div>
            </div>
            <div className='footer-contact'>
                <h3>Call Us</h3>
                <a href='tel:9885266537'>+91 9885266537</a>
            </div>
        </div>
        {/* footer bottom section */}
        <div className='footer-bottom--section'>
            <hr />
            <div className='container grid grid-two-column'>
                <p>@{new Date().getFullYear()} Possible Wellness PVT</p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .getstarted{
    gap: 2rem;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  input[type="submit"] {
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.helper};

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
  .footer-contact a{
    color: white;
    font-size: 2rem;
  }

  .footer-bottom--section {
    padding-top: 9rem;
    text-align: center;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      transform: translateY(25%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
      text-align: center;
    }
    .footer-contact a{
        color: white;
        font-size: 1.8rem;
      }
  }
`;


export default Footer
