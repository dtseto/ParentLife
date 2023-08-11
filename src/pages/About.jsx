import React from "react"

import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
           
            <div className="about-page-content">
                <h1>Prologue - "Origins: Life Before Maternity" So you are thinking of becoming a parent</h1>
                <p>Our mission is to give a few free helpful tips on the way there and after(Already enough to worry about 😉)</p>
                <p>Our team is full of people who lived through it first hand.</p>
                <h1>Three Fatherhood Myths</h1>
                <p>Some common myths</p>
                <h2>Men can't help or caretake a baby</h2>
                <p>Not true, asides from finances, men can do bottle feeding, cleaning, dressing, and speaking reading. In fact after birth the roles equalize.</p>
                <h2>You will never have sex or sleep again</h2>
                <p>Partly true in first two months after delivery. After that every baby and couple is different.</p>
                <h2>You are doomed to become your father</h2>
                <p>Genes and environment are strong but not that strong. If there are things you hate you can make extra efforts with your partner to change them or nudge against them them.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destiny is on the next page<br />Almost ready <br /> Time to do the deed</h2>
                <Link className="link-button" to="/Part1">Trimester 1 - A New Hope</Link>
            </div>
        </div>
    );
}