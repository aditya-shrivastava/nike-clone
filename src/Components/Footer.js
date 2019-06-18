import React from "react"
import "../css_comp/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="footer">
            <ul className="f-list">
                <li>FIND A STORE</li>
                <li>BECOME A MEMBER</li>
                <li>SITE FEEDBACK</li>
            </ul>

            <ul className="s-list">
                <li>GET HELP</li>
                <li>Order Status</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike.com Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
            </ul>

            <ul className="t-list">
                <li>ABOUT NIKE</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
            </ul>

            <ul className="l-list">
                <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                <li><FontAwesomeIcon icon={faFacebookSquare} /></li>
                <li><FontAwesomeIcon icon={faYoutube} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
            </ul>

            <div className="bottom">
                <div className="bottom-label">
                    <label>Guides</label>
                    <label>Terms of Use</label>
                    <label>Terms of Sale</label>
                    <label>Privacy Policy</label>
                </div>
            </div>
        </div>
    ) 
}

export default Footer