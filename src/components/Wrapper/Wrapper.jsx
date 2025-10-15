import React from 'react'
import Navbar from '../Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'
import './Wrapper.scss'

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <video autoPlay loop muted className="background-video">
                <source src="/reel-short-mobile.mp4" type="video/mp4" />
            </video>
            <Navbar />
            <LandingPage />
        </div>
    )
}

export default Wrapper
