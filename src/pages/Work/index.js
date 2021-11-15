import React from 'react';
import WorkSection from '../../components/WorkSection';
import { useSpring, animated } from 'react-spring';

function Work () {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1},
        delay: 500
    });

    
    return (
        <animated.div style={fadeIn}>
        <WorkSection />
        </animated.div>
    )
};

export default Work;