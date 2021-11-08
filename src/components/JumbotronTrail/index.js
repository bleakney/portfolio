import React from "react";
import { useTrail, animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

export default function Trail(props) {
  const { open, items } = props;

  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 210, friction: 50 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    x: open ? 0 : 20,
    height: open ? "100vh" : "0vh",
    width: open ? "80vw" : "0vw",
    from: { opacity: 0, y: 20, x: 20, height: "0vh", width: "0vw" },
  });

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
  });

  return (
    <div className="trail-container">
      <div>
        {trail.map(({ height, width, ...style }, index) => (
          <animated.div key={index} className="trail-text" style={style}>
            <animated.div style={{ height, width }}>
              {items[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <Link to="/portfolio/work" className="enter-button-container">
      <div>
        {" "}
        <animated.p style={spring} className="pointer-symbol">
          &#9758;
        </animated.p>{" "}
        <animated.p style={spring} className="pointer-symbol-text">ENTER SITE</animated.p>
        </div>
      </Link>
    </div>
  );
}
