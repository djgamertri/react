import React, {useRef, useState} from 'react'
import "./login.css"

const url_l = "http://localhost/Barbershop/models/index.php"

const envio = async (url, data) => {
    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type':'application/json'
        }
        
    });
    const respuesta = await resp.json();
    console.log(respuesta)
}

const Login = () => {

    const RefUsuario = useRef(null);
    const RefPass = useRef(null);

    const HLogin = async () => {
        const data = {
            "user" : RefUsuario.current.value,
            "pass" : RefPass.current.value
        };
        console.log(data);
        const respuestaJson = await envio(url_l, data);
    }

  return (
    <div>
        <section className="modal_login">
        <div className="contenedor_modal">
            <a href="#" className="modal_close">X</a>
            <br/>
            <div className="form">
                <h1>Login</h1>
                <input type="email" required name="email" ref={RefUsuario} id="email" placeholder="Email"/>
                <input type="password" required name="password" ref={RefPass} id="pass" placeholder="Password"/>
                <input type="submit" name="" onClick={HLogin} id="boton" value="Login"/>
            </div>
            <div className="warnings">
                <p className="mensaje">Fuck</p>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login