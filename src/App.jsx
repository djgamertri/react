
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/navbars/UserNav'
import Dashboard from './components/dashboard'
import Inicio from './components/inicio'
import Producto from './components/productos'
import M_Reserva from './components/Mreservas'
import Usuario from './components/usuario'


function App () {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/servicios" exact component={Producto}/>
        <Route path="/reserva" exact component={M_Reserva}/>
        <Route path="/usuario" exact component={Usuario}/>
        <Route path="/" exact component={Inicio}/>
      </Switch>
    </Router>
  );
}

export default App