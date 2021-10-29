import React, { useState } from "react";
import JumboTronTrail from '../JumbotronTrail';

export default function Jumbotron() {
  const text = [
    "hi there. welcome to my website.",
    "i'm a former advertising creative", 
    "turned UI/UX engineer.",
    "here's some stuff i made.",
    "i hope you like it.",
  ];
  //   const props = useSpring({
  //     from: { opacity: 0, transform: 'translateX(0)' },
  //     to: { opacity: 1, transform: 'translateX(30px)' },
  //     delay: 500,
  //   });
  const [open, setOpen] = useState(true);
  return (
    <section className={`jumbotron-container`} onClick={() => setOpen(state => !state)}>
        <JumboTronTrail items={text} open={open} />

      {/* {text.map((text, i) => (
        <animated.h1 key={`text-${i}`} style={props}>
          {text}
        </animated.h1>
      ))} */}
    </section>
  );
};
