import React from 'react'
import Header from '../../Components/Header/Header'
import SideNavbar from '../../Components/SideNavbar/SideNavbar'
import './Hero.scss'


function Hero() {
    return (
        <div className="hero">
            <SideNavbar/>
            <div className="hero-mainsection">
                <Header/>
            </div>
        </div>
    )
}

export default Hero
