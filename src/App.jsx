import React from 'react'
import Hero from './Components/Hero'
import Info from './Components/Info';
import LastSection from './Components/LastSection';
import MiddleFloat from './Components/MiddleFloat';
import Partners from './Components/Partners';
import Priority from './Components/Priority';
import Sponsors from './Components/Sponsors';


function App() {


  return (
    <div>
      <div>
        <Hero/>
        <MiddleFloat />
        <Priority />
        <Sponsors />
        <Partners />
        <Info />
        <LastSection/>
      </div>
    </div>
  );
}

export default App
