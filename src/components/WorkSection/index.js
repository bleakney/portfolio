import React, { useState } from 'react';
import { Parallax } from '@react-spring/parallax'
import styles from './styles.module.css';
import ProjectPage from '../ProjectPage';

function WorkSection () {
    const images = ['./images/free-maps.png', './images/broadcastr.png', './images/movie-date.png'];

const [page, scroll] = useState(0);

    // const scroll = ( pageNumber ) => {
    //     if (parallax.current) {
    //         parallax.current.scrollTo(pageNumber)
    //     }
    // };

    return (
        <section className="work-section">
            <Parallax pages={3} horizontal>
            <ProjectPage offset={0} gradient="pink" onClick={() => scroll(1)} />
            <ProjectPage offset={1} gradient="teal" onClick={() => scroll(2)} />
            <ProjectPage offset={2} gradient="tomato" onClick={() => scroll(0)} />
        {/* <img src="./images/free-maps.png" />
        <img src="./images/broadcastr.png" /> */}
        </Parallax>
    </section>
    )
}

export default WorkSection;