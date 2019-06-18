import React from "react"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import "./css_comp/hero.css"

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <Card />
            <Footer />
        </div>
    )
}

export default App