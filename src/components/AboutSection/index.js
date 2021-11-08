import React from 'react';

export default function AboutSection () {

    return (
        <section className="about-section">
            <h1>ABOUT ME</h1> 
            <div className="about-content">
            <div className="about-image-container">
                <img src="./images/me.jpg" alt="headshot" style={{"borderRadius": "50%"}}/>
                <div className="social-links-container">
                <a className="svg-link-container" href="https://github.com/bleakney"><img src="./images/svg/github.svg" alt="github profile" /></a>
                <a className="svg-link-container" href="https://linkedin.com/in/bleakney-bissett"><img src="./images/svg/linkedin.svg" alt="linkedIn profile" /></a>
                <a className="svg-link-container" href="mailto:bleakneybissett@gmail.com"><img src="./images/svg/envelope.svg" alt="email me" /></a>
                </div>
            </div>
            <div style={{"width": "40%"}}>
            <p><span className="paragraph-start">G</span>lad you asked. I'm a full-stack web developer experienced with the MERN stack. I received my B.S. in Advertising from the University of Texas at Austin in 2020. While there, I applied and was accepted to Texas Creative, a highly competitive portfolio program where I earned my chops at art direction and copywriting. I learned a <span style={{"fontStyle": "italic"}}>lot</span>, including the fact that I didn't particularly want to work in advertising. Sometime after that we had a pandemic, and I needed a hobby. Boredom and curiosity led to me start fiddling around with coding, and it turns out, I loved it. I went back to UT and enrolled in their 6-month Full-Stack Coding Bootcamp, graduating with a 97.2 average. I love design and I love writing code. If you're looking to hire someone who can do both, drop me a line.
</p>
</div>
</div>
        </section>
    )
};