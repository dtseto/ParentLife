import React from "react"
import { Link } from "react-router-dom"
export default function Part2() {
    return (
        <div className="about-page-container">
           
            <div className="about-page-content">
                <h1>The Baby Strikes Back: Trimester Two</h1>
                <p>Our mission is to give a few free helpful tips on the way there and after(Already enough to worry about 😉)</p>
                <p>Our team is full of people who lived through it first hand.</p>
                <p>This is the happy medium. No side effects. Still looks pregnant. Can still fly to travel. Time for a babymoon.</p>
                <h1>Growth Timeline</h1>
                <p>Week 15. Some women can feel flutter movement.</p>
                <p>Week 20. Halfway there. The fetus is 6.5 inches long and weighs 10 ounces nearly 280grams.</p>
                <p>Week 23. The baby can now hear and most major organs are partly functional including the lungs.</p>
                <p>Week 27. Fetus is now 2 pounds and 14 inches long. This is nearly 3 times the size weight as 8 weeks ago.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destiny is on the next page<br />Almost ready</h2>
                <Link className="link-button" to="/Part3">Trimester 3 - Countdown to Arrival: Birth Endgame</Link>
            </div>
        </div>

    )
}