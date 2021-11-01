import React from 'react'
import Header from '../../Components/Header/Header'
import MainSection from '../../Components/MainSection/MainSection'
import SideNavbar from '../../Components/SideNavbar/SideNavbar'
import './Hero.scss'


function Hero() {
    return (
        <div className="hero">
            <SideNavbar/>
            <div className="hero-mainsection">
                <Header/>
                <MainSection/>
            </div>
        </div>
    )
}

export default Hero
