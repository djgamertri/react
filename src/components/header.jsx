import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import { NavLink } from 'react-router-dom'
import user from ".././img/curry.jpg"
import { Nav } from "../estilos"
import "./header.css"

const cookies = new Cookies();

const Header = () => {

    useEffect(()=>{
        if (cookies.get("nombre")) {
            setLogeado(true)
        }
        if (cookies.get("rol") == "Administrador"){
            setPrivilegios(true)
        }
    }, [])

    const [Despliegue, setDespliegue] = useState(false)
    const [Logeado, setLogeado] = useState(false)
    const [Modal, setModal] = useState(false)
    const [Privilegios, setPrivilegios] = useState(false)

    const CerrarSesion = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("nombre", { path: "/" });
        cookies.remove("correo", { path: "/" });
        cookies.remove("rol", { path: "/" });
    }

  return (
    <div>
        <Nav open = {Despliegue}>
        <div className="logo">
            <h2><span><i className="las la-cut"></i></span>Barbershop</h2>
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to="/" exact activeClassName='active' ><span><i className="las la-home"></i></span>Inicio</NavLink></li>
                {
                    Logeado ?  Privilegios ? <li><NavLink to="/dashboard" exact activeClassName='active' ><span><i className="las la-igloo"></i></span>Dashboard</NavLink></li> : "" : ""
                }
                {
                    Logeado ? <li><NavLink to="/servicios" exact activeClassName='active' ><span><i class="las la-cart-plus"></i></span>Reservas</NavLink></li> : ""
                }
                {
                    Logeado ? <li><NavLink to="/servicios" exact activeClassName='active' ><span><i class="las la-book"></i></span>Mis Reservas</NavLink></li> : ""
                }
                <li><a href="#Conocenos" exact activeClassName='active' ><span><i className="las la-address-book"></i></span>Conocenos</a></li>
                <li><a href="#servicio" exact activeClassName='active' ><span><i className="las la-book-reader"></i></span>Servicio</a></li>
                <li><a href="#footer" exact activeClassName='active' ><span><i className="las la-phone"></i></span>Contactanos</a></li>
                {
                    Logeado ? "" : <li><NavLink to="/login" className="login_btn" exact activeClassName='active' ><span><i class="las la-user"></i></span>Login</NavLink></li> 
                }
                {
                    Logeado ? "" : <li><a href="#" class="register_btn"><span><i class="las la-user-plus"></i></span>Register</a></li>
                }
                {
                    Logeado ? <li><a href="" onClick={CerrarSesion}><span><i class="las la-sign-out-alt"></i></span>Cerrar Sesion</a></li> : ""
                }
                
            </ul>
        </div>
        </Nav>
        <header id="header">
            <h2 id="btn-menu" onClick={() => setDespliegue(!Despliegue)}>
                <span id="btn"><i className="las la-bars"></i></span>
                Inicio
            </h2>
            {
                Logeado ?     
                
                <div className="user" id="user">
                <img className="img_user" src={cookies.get("imagen")} alt=""/>
                    <div>
                        <h4>{cookies.get("nombre")}</h4>
                        <small>{cookies.get("rol")}</small>
                    </div>
                </div>

                : ""
            }
            
        </header>
    </div>
    
  )
}

export default Header
