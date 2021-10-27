import React, { useEffect } from 'react';
// import stylesheet and fonts
import './styles.scss';
import WebFont from 'webfontloader';
//import components
import Background from './components/Background';

function App() {
  // import google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900', 'Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900']
      }
    })
  })

  return (
    <Background>

    </Background>
  );
}

export default App;
