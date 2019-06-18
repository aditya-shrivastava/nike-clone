import React from "react"
import '../css_comp/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="top">
            <ul className="left-link">
                <li>NikePlus</li>
                <li>Jordan</li>
            </ul>
            <ul className="right-link">
                <li><a href="#">Join / Log In To NikePlus Account</a></li>
                <li> 
                    <div className="dropdown">
                        <label>Help</label>
                        <div className="dropdown-content">
                            <a href="#">Order Status</a>
                            <a href="#">Delivery</a>
                            <a href="#">Returns</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Terms of Sale</a>
                            <a href="#">Site Feedback</a>
                            <a href="#">View All</a>
                        </div>
                    </div>
                </li>
                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
            </ul>
        </div>
    )
}

export default Header