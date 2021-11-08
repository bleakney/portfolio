import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import WorkDoodleSvg from "../WorkDoodleSvg";
// import styles from './styles.module.css';

export default function ProjectPage({ offset, onClick }) {
  const projectImages = [
    "./images/free-maps.png",
    "./images/movie-date.png",
    "./images/broadcastr.png",
  ];
  const projectTitles = ["Free Maps", "Movie Date", "broadcastr"];

  return (
    <div className="project-page-container">
      <ParallaxLayer className="parallax-layer" offset={offset} onClick={onClick} speed={0.6}>
        <div className="svg-container centered">
          <WorkDoodleSvg />
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer" offset={offset} onClick={onClick}>
        <div className="project-image-container centered">
          <img className="project-page-image" alt={projectTitles[offset]} src={projectImages[offset]} />
          <div className="project-title-container">
            <h1>{projectTitles[offset]}</h1>
          </div>
        </div>
      </ParallaxLayer>
      {/* <ParallaxLayer offset={offset} onClick={onClick}> */}
          {/* <div className="project-arrow-container">
          <h1 onClick={onClick}>          	
&#8250;
          </h1>
          </div> */}
      {/* </ParallaxLayer> */}
    </div>
  );
}

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
