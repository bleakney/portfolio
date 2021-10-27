import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
// import stylesheet and fonts
import './styles.scss';
import WebFont from 'webfontloader';
//import components
import Nav from './components/Nav';


function App() {
  // import google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900', 'Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900']
      }
    })
  })
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xd00ff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
  <div className="vanta-container" ref={myRef}>
    <Nav />

  </div>
  );
}

export default App;
