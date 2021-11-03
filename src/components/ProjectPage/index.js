import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import WorkDoodleSvg from '../WorkDoodleSvg';
// import styles from './styles.module.css';

export default function ProjectPage ({ offset, gradient, onClick }) {

    const projectImages = ['./images/free-maps.png', './images/movie-date.png', './images/broadcastr.png'];
    const projectTitles = ['Free Maps', 'Movie Date', 'broadcastr'];

   
return (
    <div className="project-page-container">
        <ParallaxLayer offset={offset} speed={0.6}>
            <div className="svg-container centered" >
                <WorkDoodleSvg /> 
            </div>
            </ParallaxLayer>
<ParallaxLayer offset={offset}>
    <div className="project-image-container centered">
<img className="project-page-image" src={projectImages[offset]} />
<div className="project-title-container">
        <h1>{projectTitles[offset]}</h1>
        </div>
</div>
</ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.1}>
       
    </ParallaxLayer>
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