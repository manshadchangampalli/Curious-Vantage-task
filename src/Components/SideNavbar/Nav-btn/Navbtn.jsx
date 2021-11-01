import React, {useState} from 'react'
import { CgProfile, CgCrown } from 'react-icons/cg'
import { MdOutlineAnalytics, MdOutlineMonetizationOn } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi"


function Navbtn({navTxt,navClass}) {

    let navIcon;
    let iconStyles = { fontSize: "1.3rem",color:"#000" };
    switch(navTxt){
        case 'My Page':
            navIcon= <CgProfile style={{fontSize: "1.3rem",color:"rgb(242, 98, 124)" }}/>
            break;
        case 'Monetize':
            navIcon= <CgCrown style={iconStyles}/>
            break;
        case 'Analytics':
            navIcon= <MdOutlineAnalytics style={iconStyles}/>
                break;
        case 'Earnings':
            navIcon= <MdOutlineMonetizationOn style={iconStyles}/>
            break;
        case 'Referrals':
            navIcon= <BsEmojiSmile style={iconStyles}/>
            break;
        case 'Settings':
            navIcon= <AiOutlineSetting style={iconStyles}/>
            break;
        case 'Logout':
            navIcon= <BiLogOut style={iconStyles}/>
            break;
        default:
    }


    return (
        <div  className={navClass+"-icon navicons"}>
            <div className="navicon">
            {navIcon}
            </div>
            <p>{navTxt}</p>
        </div>
    )
}

export default Navbtn
