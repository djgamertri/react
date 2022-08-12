import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import { NavLink } from 'react-router-dom'
import { Nav } from "../estilos"
import Login from './login'
import Register from './register'
import "./header.css"

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
    const [Despliegue, setDespliegue] = useState(false)
    const [Logeado, setLogeado] = useState(false)
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
                    Logeado ? <li><NavLink to="/servicios" exact activeClassName='active' ><span><i className="las la-cart-plus"></i></span>Reservas</NavLink></li> : ""
                }
                <li><a href="#Conocenos" exact activeClassName='active' ><span><i className="las la-address-book"></i></span>Conocenos</a></li>
                <li><a href="#servicio" exact activeClassName='active' ><span><i className="las la-book-reader"></i></span>Servicio</a></li>
                <li><a href="#footer" exact activeClassName='active' ><span><i className="las la-phone"></i></span>Contactanos</a></li>
                {
                    Logeado ? <li><NavLink to="/servicios" exact activeClassName='active' ><span><i className="las la-book"></i></span>Mis Reservas</NavLink></li> : ""
                }
                {
                    Logeado ? "" : <li><NavLink to="" onClick={() => {setOpenModal(true);}} className="login_btn" exact activeClassName=''><span><i className="las la-user"></i></span>Login</NavLink></li> 
                }
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
        {OpenModal && <Login CloseModal={setOpenModal}/>}
        {OpenModalR && <Register CloseModal={setOpenModalR}/> }
    </div>
    
  )
}

export default Header
