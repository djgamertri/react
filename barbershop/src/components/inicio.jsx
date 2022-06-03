
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Banner from './banner'
import Conocenos from './conocenos'
import Servicio from './servicio'
import Footer from './footer'
import Dashboard from './dashboard'

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