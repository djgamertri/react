import React from 'react'
import "./header.css"
import user from "../../img/curry.jpg"

const Header = () => {
  return (
    <div>
        <div class="nav" id="nav">
        <div class="logo">
            <h2><span><i class="las la-cut"></i></span>Barbershop</h2>
        </div>
        <div class="menu">
            <ul>
                <li><a href="#banner" class="active" ><span><i class="las la-home"></i></span>Inicio</a></li>
                <li><a href="dashboard.php"><span><i class="las la-igloo"></i></span>Dashboard</a></li>
                <li><a href="productos.php"><span><i class="las la-cart-plus"></i></span>Reservar</a></li>
                <li><a href="mis_reservas.php"><span><i class="las la-book"></i></span>Mis reservas</a></li>
                <li><a href="#Conocenos"><span><i class="las la-address-book"></i></span>Conocenos</a></li>
                <li><a href="#servicio"><span><i class="las la-book-reader"></i></span>Servicio</a></li>
                <li><a href="#footer"><span><i class="las la-phone"></i></span>Contactanos</a></li>
                <li><a href="#" class="login_btn"><span><i class="las la-user"></i></span>Login</a></li>
                <li><a href="#" class="register_btn"><span><i class="las la-user-plus"></i></span>Register</a></li>
            </ul>
        </div>
        </div>
        <header id="header">
            <h2>
                <span id="btn"><i class="las la-bars"></i></span>
                Inicio
            </h2>
            <div class="user" id="user">
            <img class="img_user" src={user} alt=""/>
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