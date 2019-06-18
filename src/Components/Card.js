import React from "react"
import "../css_comp/card.css"
import sdmn1 from "../images/tobi-nike.jpg"

function Card() {
    return (
        <div className="store-card">
            <label>More Nike</label>
            <br />
            <div className="kit">
                <img src={sdmn1} alt="sdmn-nike-1" />
                <button>Nike X SDMN ></button>    
            </div>
        </div>
    )
}

export default Card