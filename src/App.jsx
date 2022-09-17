
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/navbars/UserNav'
import Dashboard from './components/dashboard'
import Inicio from './components/inicio'
import Producto from './components/productos'
import VerReserva from './components/eliminar_reserva';
import Usuario from './components/usuario'
import Reservas from './components/reservas';
import MisReservas from './components/mis_reservas';
import Checkout from './components/checkout';


function App () {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/servicios" exact component={Producto}/>
        <Route path="/reserva" exact component={Reservas}/>
        <Route path="/usuario" exact component={Usuario}/>
        <Route path="/misReservas" exact component={MisReservas}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/" exact component={Inicio}/>
      </Switch>
    </Router>
  );
}

export default App