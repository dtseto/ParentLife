import React from "react"
import { Link } from "react-router-dom"
export default function Part3() {
    return (
        <div className="about-page-container">
           
            <div className="about-page-content">
                <h1>Trimester 3 - Countdown to Arrival: Birth Endgame</h1>
                <p>Our mission is to give a few free helpful tips on the way there and after(Already enough to worry about 😉)</p>
                <p>Our team is full of people who lived through it first hand.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destiny is on the next page<br />Almost ready</h2>
                <Link className="link-button" to="/Part4">Life After Labor - The New Frontier</Link>
            </div>
        </div>
    )
}