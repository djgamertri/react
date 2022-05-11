import React, {useState} from 'react'
import user from ".././img/curry.jpg"
import { NavLink } from 'react-router-dom'
import { Nav } from "../estilos"
import "./header.css"


const Header = () => {

    const [Despliegue, setDespliegue] = useState(false)

  return (
    <div>
        <Nav open = {Despliegue}>
        <div className="logo">
            <h2><span><i className="las la-cut"></i></span>Barbershop</h2>
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to="/" exact activeClassName='active' ><span><i className="las la-home"></i></span>Inicio</NavLink></li>
                <li><NavLink to="/dashboard" exact activeClassName='active' ><span><i className="las la-igloo"></i></span>Dashboard</NavLink></li>
                <li><a href="#Conocenos" exact activeClassName='active' ><span><i className="las la-address-book"></i></span>Conocenos</a></li>
                <li><a href="#servicio" exact activeClassName='active' ><span><i className="las la-book-reader"></i></span>Servicio</a></li>
                <li><a href="#footer" exact activeClassName='active' ><span><i className="las la-phone"></i></span>Contactanos</a></li>
            </ul>
        </div>
        </Nav>
        <header id="header">
            <h2 id="btn-menu" onClick={() => setDespliegue(!Despliegue)}>
                <span id="btn"><i className="las la-bars"></i></span>
                Inicio
            </h2>
            <div className="user" id="user">
            <img className="img_user" src={user} alt=""/>
                <div>
                    <h4>Erick Rodriguez</h4>
                    <small>Administrador</small>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
