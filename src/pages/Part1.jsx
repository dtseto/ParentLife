import React from "react"

import { Link } from "react-router-dom"

export default function Part1() {
    return (
        <div className="about-page-container">
           
            <div className="about-page-content">

                <h1>Trimester One -  A New Hope</h1>
                <p>Our mission is to give a few free helpful tips on the way there and after(Already enough to worry about 😉)</p>
                <p>Our team is full of people who lived through it first hand.</p>
                <h1>Congrats!</h1>
                <p>Be supportive when your partner gives the news. But you may decide not to tell others until 12 weeks due to possibilty of miscarriage. If you are not fully ready you have 39 weeks to learn from other parents or your own.</p>
                <h1>Doctor's visits</h1>
                <p>In modern times dads go to with moms to OBGYN visits. For mothers less than 35 there is one at 10 weeks and then every 4 weeks till 28 weeks. Then every two weeks until 36 weeks. Then every week until birth.</p>
                <p>At doctor's visits they may do any of the following : weight test, test blood for blood type, antibodies for disease, test blood for chromosomal abnormalities, ultrasound size and health, check baby heartbeat.</p>
                <h1>Growth Timeline</h1>
                <p>Week 2. Egg and sperm meet in the fallopian tube and fertilization occurs. The embryo falls down into the uterus.</p>
                <p>Week 3. Implantation occurs and there may be light spotting from the embryo attaching to the uterus.</p>
                <p>Week 4. Period is missed. A pregnancy test may detect hCG hormones and on an ultrasound a tiny dark spot may appear.</p>
                <p>Week 6. Embryo starts forming and a heartbeat may be detectible. Arm, leg and face start to form.</p>
                <p>Week 8. Fingers and toes are forming and starting to move though not perceptible by the mom.</p>
                <p>Week 10. Baby's heartbeat may be audible in time for ultrasound.</p>
                <h1>Symptoms</h1>
                <p>Nausea and vomiting. Help with the cleaning and chores if needed so they can rest.</p>
                <p>Sensitvity to smells and tastes. Maybe not eat at those until second trimester.</p>
                <p>Having to use the restroom. Plan extra car stops to use the restroom. Also it counters increased risk of blod clots.</p>
                <p>Moodswings. Don't take it personally this too will pass.</p>


            
            </div>
            <div className="about-page-cta">
                <h2>Your destiny is on the next page<br />Almost ready</h2>
                <Link className="link-button" to="/Part2">The Baby Strikes Back: Trimester Two</Link>
            </div>
        </div>

    )
}