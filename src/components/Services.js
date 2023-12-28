import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Services = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-three-column'>
          <div className='services-1 service'>
            <TbTruckDelivery className='icon'/>
            <h3>Supper Fast And Free Delivery</h3>
          </div>
          <div className='services-2'>
            <div className='service-coumn-2 service'>
               <MdSecurity className='icon'/>
               <h3 className='second-last'>Non-Contact Shipping</h3>
            </div>
            <div className='service-coumn-2 service'>
               <GiReceiveMoney className='icon'/>
               <h3 className='second-last'>Money Back Guaranteed</h3>
            </div>
          </div>
          <div className='services-3 service'>
            <RiSecurePaymentLine className='icon' />
            <h3>Secure payments</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .grid{
      gap: 4.2rem;
    }
    padding: 4rem 0;
    .services-1,
    .services-2,
    .services-3{
      width : 100%;
      height: 25rem;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 20px;
      gap: 2rem;
    }
    .service-coumn-2{
      width: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      gap: 3rem;
      text-align: center;
      height: 25rem;  
    }
    .icon{
      font-size: 3rem;
      color:${({theme}) => theme.colors.helper}
    }
    .service{
      background-color: ${({theme})=> theme.colors.bg}
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .icon{
        font-size: 4rem;
        color:${({theme}) => theme.colors.helper}
      }

    }
`

export default Services
