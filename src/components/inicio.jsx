
import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Banner from './banner'
import Conocenos from './conocenos'
import Servicio from './servicio'
import Footer from './footer'

function Inicio () {
  
  return (
    <Router>
      <Banner/>
      <Conocenos/>
      <Servicio/>
      <Footer/>
    </Router>
  );
  
}


export default Inicio