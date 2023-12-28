import React from 'react'
// import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import FeatureProducts from './components/FeatureProducts';
import Services from './components/Services';
import Trusted from './components/Trusted';
// import InterViewOne from './InterViewQua/InterViewOne';
// import HOCMemo from './InterViewQua/HOCMemo'
// import UseMemoHook from './InterViewQua/UseMemoHook'
const Home = () => {
    const heroTitle = {
        name : 'Possible'
    }
  return (
        <>
            {/* <InterViewOne /> */}
            {/* <HOCMemo /> */}
            {/* <UseMemoHook /> */}
            <HeroSection heroTitle = {heroTitle}/>
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
  )
}

export default Home
