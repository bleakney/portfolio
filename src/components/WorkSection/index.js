import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import HorizontalScroll from 'react-scroll-horizontal';
import ProjectPage from "../ProjectPage";

function WorkSection() {
  const parallax = useRef(Parallax);

  const githubLinks = ['https://github.com/bleakney/free-maps', 'https://github.com/danielolvera21/movie_date', 'https://github.com/rmwillow/theSocialScoop'];
  const deploymentLinks = ['https://tranquil-garden-66594.herokuapp.com/', 'https://danielolvera21.github.io/movie_date/index.html', 'https://broadcastrss.herokuapp.com/' ]
  const [index, setIndex] = useState(0);

  const scrollForward = (currentPageNumber) => {
    if (currentPageNumber < 2) {
    setIndex(currentPageNumber + 1);
      parallax.current.scrollTo(currentPageNumber + 1 );
    } else {
        setIndex(0);
        parallax.current.scrollTo(0);
    }
  };

  const scrollBackward = (currentPageNumber) => {
      if (currentPageNumber > 0) {
          setIndex(currentPageNumber - 1);
        parallax.current.scrollTo(currentPageNumber - 1 );
      } else {
        parallax.current.scrollTo(2);
        setIndex(2);
      }
  }

  return (
    <section className="work-section">
      <Parallax className="parallax" pages={3} ref={parallax} horizontal>
        <ParallaxLayer sticky={{ start: 0, end: 2 }}>
          <div className="parallax-layer-sticky">
            <h1>WORK</h1>
            <div className="parallax-arrows-container vertically-centered">
            <h1 className="parallax-left-arrow" onClick={() => scrollBackward(parallax.current.offset)}>&#10094;</h1>
            <h1 className="parallax-right-arrow" onClick={() => scrollForward(parallax.current.offset)}>&#10095;</h1>
            </div>
            <div className="project-links-container">
          <a className="svg-link-container" href={githubLinks[index]}><img src="./images/svg/github.svg" alt="github repository" /></a>
          <a className="svg-link-container" href={deploymentLinks[index]}><h4>view deployment</h4></a>
          </div>
          </div>
        </ParallaxLayer>
        <ProjectPage offset={0} onClick={() => scrollForward(1)} />
        <ProjectPage offset={1} onClick={() => scrollForward(2)} />
        <ProjectPage offset={2} onClick={() => scrollForward(0)} />

        {/* <img src="./images/free-maps.png" />
        <img src="./images/broadcastr.png" /> */}
      </Parallax>
    </section>
  );
}

export default WorkSection;
