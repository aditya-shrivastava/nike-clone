import React from "react"
import logo from "../nike-logo-2.png"
import "../css_comp/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="nike-logo"></img>
            <ul className="center-link">
               <li>MEN</li>
               <li>WOMEN</li>
               <li>BOYS</li>
               <li>GIRLS</li>
               <li>CUSTOMISE</li>
               <li>COLLECTIONS</li>
               <li>LAUNCH CALENDAR</li>
            </ul>
            <ul className="search">
                <li><FontAwesomeIcon className="search-icon" icon={faSearch} /></li>
                <li><input type="text" placeholder="Search" /></li>
            </ul>
        </div>
    )
}

export default Navbar