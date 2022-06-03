
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Dashboard from './components/dashboard'
import Inicio from './components/inicio'
import Login from './components/login'
import Producto from './components/productos'
import M_Reserva from './components/Mreservas'
import Usuario from './components/usuario'

function App () {
  return (
    <Router>
    <Header />
      <Switch> 
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/servicios" exact component={Producto}/>
        <Route path="/Reserva" exact component={M_Reserva}/>
        <Route path="/Usuario" exact component={Usuario}/>
        <Route path="/" exact component={Inicio}/>
      </Switch>
    </Router>
  );
}

export default App