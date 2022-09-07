
import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './navbars/UserNav';
import Banner from './banner'
import Conocenos from './conocenos'
import Servicio from './servicio'
import Footer from './footer'

function Inicio () {
  
  return (
    <>
      <Header />
      <Banner/>
      <Conocenos/>
      <Servicio/>
      <Footer/>
    </>
  );
  
}


export default Inicio