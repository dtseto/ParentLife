import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Thinking of parenting shorthand guide</h1>
            <p>Something to consult briefly on your adventure</p>
            <Link to="About">Prologue - You are thinking of becoming a parent</Link>
        </div>
    )
};