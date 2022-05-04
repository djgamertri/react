import React from 'react'
import Header from "./components/header/header"
import Banner from "./components/banner/banner"
import Conocenos from "./components/conocenos/conocenos"
import Servicio from "./components/servicios/servicio"
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <>
        <Header />
        <Banner />
        <Conocenos />
        <Servicio />
        <Footer />
    </>
  )
}

export default App