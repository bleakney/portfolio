import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import HorizontalScroll from 'react-scroll-horizontal';
import ProjectPage from "../ProjectPage";

function WorkSection() {
  const parallax = useRef(Parallax);

  const scrollForward = (currentPageNumber) => {
    if (currentPageNumber < 2) {
      parallax.current.scrollTo(currentPageNumber + 1 );
    } else {
        parallax.current.scrollTo(0);
    }
  };

  const scrollBackward = (currentPageNumber) => {
      if (currentPageNumber > 0) {
        parallax.current.scrollTo(currentPageNumber - 1 );
      } else {
        parallax.current.scrollTo(2);
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
