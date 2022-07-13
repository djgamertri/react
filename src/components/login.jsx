import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";
import "./login.css";

const Login = ({CloseModal}) => {

    // ! Cuando inicia el Componente

    useEffect(()=>{
        if (cookies.get("nombre")) {
            history.push("/");
          }
    }, [])

    // ! Definimos Constantes

    const RefCorreo = useRef(null);
    const RefPass = useRef(null);
    const cookies = new Cookies();
    const history = useHistory();
    const url_l = "http://localhost/Api/usuario.php";
    

    const preEnvio = (e) =>{
      e.preventDefault();
      Envio();
    }

    // ! Definimos la funcion del envio

    const Envio = async() =>{
      await axios.get(url_l, {
          params: {
            correo: RefCorreo.current.value,
            pass: RefPass.current.value,
          },
        })
        .then((response) => {
          return response.data; // ! Retornamos Respuesta para evaluarla
        })
        .then((response) => {
          if (response.length > 0) {
            var res = response[0];
            cookies.set("id", res.id, { path: "/" });
            cookies.set("imagen", res.imagen, { path: "/" });
            cookies.set("nombre", res.nombre, { path: "/" });
            cookies.set("correo", res.correo, { path: "/" });
            cookies.set("pass", res.pass, { path: "/" });
            cookies.set("rol", res.rol, { path: "/" });
            alert(`Bienvenido ${res.nombre} ${res.rol}`);
            CloseModal(false);
            window.location.href = "../";
            history.push("/");
          } else {
            alert("Credenciales Incorrectas, Porfavor intente de nuevo");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
    <div>
        <section className="modal_login">
          <div className="contenedor_modal">
            <a href="#" className="modal_close" onClick={() => CloseModal(false)}>
              X
            </a>
            <br />
            <form className="form" autoComplete="off" onSubmit={preEnvio}>
              <h1>Login</h1>
              <input type="email" required name="email" id="email" ref={RefCorreo} placeholder="Email" />
              <input type="password" required name="password" id="pass" ref={RefPass} placeholder="Password" />
              <input type="submit" name="" id="boton" onSubmit={preEnvio} value="Login" />
            </form>
          </div>
        </section>
      </div>
  )
}

export default Login