import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FOG from "vanta/dist/vanta.fog.min";
// import stylesheet and fonts
import "./styles.scss";
import WebFont from "webfontloader";
//import components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // set up nav state
  const [aboutSelected, setAboutSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);

  // import google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900",
          "Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
        ],
      },
    });
  });
  const [vantaEffect, setVantaEffect] = useState(0);
  // const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: "#root",
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
    <Router>
      <div className="vanta-container">
        <Nav
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          workSelected={workSelected}
          setWorkSelected={setWorkSelected}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
