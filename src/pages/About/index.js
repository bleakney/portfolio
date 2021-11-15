import React from 'react';
import AboutSection from '../../components/AboutSection';
import { useSpring, animated } from 'react-spring';

function About () {

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1},
    });
    
    return (
        <animated.div style={fadeIn}>
        <AboutSection />
        </animated.div>
    )
};

export default About;