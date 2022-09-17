import Cookies from 'universal-cookie'
import { NavLink } from 'react-router-dom'
import React, {useState, useEffect} from 'react'

import "../header.css"
import Login from '../login'
import Register from '../register'
import Perfil from '../perfil'

import { Nav } from "../../estilos"

const cookies = new Cookies();

const Header = (actulizar) => {

    useEffect(()=>{
        if (cookies.get("nombre")) {
            setLogeado(true)
        }
        if (cookies.get("rol") === "Administrador"){
            setPrivilegios(true)
        }
    }, [])

    const [OpenModal, setOpenModal] = useState(false)
    const [OpenModalR, setOpenModalR] = useState(false)
    const [Despliegue, setDespliegue] = useState(true)
    const [Logeado, setLogeado] = useState(false)
    const [Privilegios, setPrivilegios] = useState(false)

    const CerrarSesion = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("nombre", { path: "/" });
        cookies.remove("correo", { path: "/" });
        cookies.remove("imagen", { path: "/" });
        cookies.remove("pass", { path: "/" });
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
                
                {
                    Logeado ?  Privilegios ? <li><NavLink to="/dashboard" exact activeClassName='active' ><span><i className="las la-igloo"></i></span>Dashboard</NavLink></li> : "" : ""
                }
                {
                    Logeado ? Privilegios ? <li><NavLink to="/usuario" exact activeClassName='active' ><span><i class="las la-user"></i></span>Usuarios</NavLink></li> : "" : ""
                }
                {
                    Logeado ? Privilegios ? <li><NavLink to="/reserva" exact activeClassName='active' ><span><i className="las la-book"></i></span>Reservas</NavLink></li> : "" : ""
                }
                {
                    Logeado ? Privilegios ? <li><NavLink to="/misReservas" exact activeClassName='active' ><span><i className="las la-book"></i></span>Mis Reservas</NavLink></li> : "" : ""
                }
                <li><NavLink to="/" exact activeClassName='active' ><span><i className="las la-home"></i></span>Inicio</NavLink></li>
                {
                    Logeado ? "" : <li><a href="#" onClick={() => {setOpenModalR(true);}} className="register_btn"><span><i className="las la-user-plus"></i></span>Register</a></li>
                }
                {
                    Logeado ? <li><a href="" onClick={CerrarSesion}><span><i className="las la-sign-out-alt"></i></span>Cerrar Sesion</a></li> : ""
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
                

                <Perfil/>

                : null
            }
            
        </header>
        {OpenModal && <Login CloseModal={setOpenModal}/>}
        {OpenModalR && <Register CloseModal={setOpenModalR}/> }
    </div>
    
  )
}

export default Header
