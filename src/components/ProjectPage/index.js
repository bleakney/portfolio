import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import WorkDoodleSvg from '../WorkDoodleSvg';
// import styles from './styles.module.css';

export default function ProjectPage ({ offset, gradient, onClick }) {

   
return (
    <div className="project-page-container">
        <ParallaxLayer offset={offset} speed={0.2}>
            <div className="svg-container" >
                <WorkDoodleSvg />
            </div>
            </ParallaxLayer>
    {/* <ParallaxLayer>
        <div className="project-title-container">
        <h2>Free Maps</h2>
        </div>
    </ParallaxLayer> */}
    </div>
);
};


/* <ParallaxLayer offset={offset} speed={0.2} onClick={onClick} >
        <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        <span className={`${styles.text}  ${styles.number}`}>free maps</span>
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text}  ${styles.number}`} offset={offset} speed={0.3}>
        <span>free maps</span>
    </ParallaxLayer> */