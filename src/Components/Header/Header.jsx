import React from 'react'
import { MdOutlineDesignServices } from 'react-icons/md'
import { RiLinksFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
    const iconStlye= {fontSize:"1.5rem"}
    return (
        <div className="header">
            <div className=" first-section">
                <div className="items links">
                    <RiLinksFill style={iconStlye}/>
                </div>
                <div className="items design">
                    <MdOutlineDesignServices style={iconStlye}/>
                </div>
            </div>
            <div className="copy-url">
                <p>https://link.snipfeed.co/manshad</p>
                <div className="copy-btn">
                    Copy
                </div>
            </div>
        </div>
    )
}

export default Header
