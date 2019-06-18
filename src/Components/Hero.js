import React from "react"
import heroLogo from "../images/nike-pegasus.jpg"
import nikeBB from "../images/nike-bb.jpg"
import hyper from "../images/nike-hypervenom.jpg"
import nikeFootball from "../images/nike-football.jpg"

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <img src={heroLogo} alt="nike-pegasus" />
                <div className="banner-text">
                    Pegasus 36 Trail
                    <br />
                    <p>RUN ON THE WILD</p>
                    <p>SIDE</p>
                    <br />
                    <button name="shop">Shop</button>
                </div>
            </div>
            <div className="himg">
                <div className="hleft">
                    <img src={nikeBB} alt="nike-bb" />
                    <div className="banner-text">
                        <p>Nike Adapt BB</p>
                        <br />
                        <button name="shop">Shop</button>
                    </div>  
                </div>

                <div className="hright">
                    <img src={hyper} alt="nike-bb" />
                    <div className="banner-text">
                        <p>Nike hypervenom</p>
                        <br />
                        <button name="shop">Shop</button>
                    </div>  
                </div>
            </div>
            
            <div className="hero-content-last">
                <img src={nikeFootball} alt="nike-football" />
                <div className="banner-text">
                    <p>THE LOOK OF</p>
                    <p>FOOTBALL</p>
                    <br />
                    <button name="shop">Shop</button>
                </div>
            </div>

        </div>
    )
}

export default Hero