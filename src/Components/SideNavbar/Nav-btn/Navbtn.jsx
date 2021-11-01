import React, {useState} from 'react'
import { CgProfile, CgCrown } from 'react-icons/cg'
import { MdOutlineAnalytics, MdOutlineMonetizationOn } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi"


function Navbtn({navTxt,navClass}) {
    const [navClicked, setNavClicked] = useState()
    let navIcon;
    let iconStyles = { fontSize: "1.3rem",color:"#000" };
    let clickedIconStyles = {color:"rgb(242, 98, 124)",fontSize: "1.3rem" }
    switch(navTxt){
        case 'My Page':
            navIcon= <CgProfile style={navClicked=='My Page'?clickedIconStyles:iconStyles}/>
            break;
        case 'Monetize':
            navIcon= <CgCrown style={navClicked=='Monetize'?clickedIconStyles:iconStyles}/>
            break;
        case 'Analytics':
            navIcon= <MdOutlineAnalytics style={navClicked=='Analytics'?clickedIconStyles:iconStyles}/>
                break;
        case 'Earnings':
            navIcon= <MdOutlineMonetizationOn style={navClicked=='Earnings'?clickedIconStyles:iconStyles}/>
            break;
        case 'Referrals':
            navIcon= <BsEmojiSmile style={navClicked=='Referrals'?clickedIconStyles:iconStyles}/>
            break;
        case 'Settings':
            navIcon= <AiOutlineSetting style={navClicked=='Settings'?clickedIconStyles:iconStyles}/>
            break;
        case 'Logout':
            navIcon= <BiLogOut style={navClicked=='Logout'?clickedIconStyles:iconStyles}/>
            break;
        default:
    }

const navButtonClicked =(navText)=>{
    console.log(navText);
    setNavClicked(navText)
}

    return (
        <div onClick={()=>navButtonClicked(navTxt)} className={navClass+"-icon navicons"}>
            <div className="navicon">
            {navIcon}
            </div>
            <p>{navTxt}</p>
        </div>
    )
}

export default Navbtn
