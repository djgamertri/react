import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';
import React, {useRef, useEffect} from 'react';
import "./login.css";
import { parseJSON } from "date-fns";

const Login = ({CloseModal}) => {
  
  // ! Definimos Constantes

  const RefCorreo = useRef(null);
  const RefPass = useRef(null);
  const cookies = new Cookies();
  const history = useHistory();
  const url_l = "https://api-barbershop.000webhostapp.com/usuario.php";

  // ! Cuando inicia el Componente

  useEffect(()=>{
      if (cookies.get("nombre")) {
          history.push("/");
      }
  }, [])

  const headers = {
    'Content-Type': 'application/json',
  }

  const preEnvio = (e) =>{
    e.preventDefault();
    Envio();
  }

  // ! Definimos la funcion del envio

  const Envio = async() =>{
    const data = {
      "correo": RefCorreo.current.value,
      "pass": md5(RefPass.current.value),
  }
    console.log(data)
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow',
    };
    
    await fetch(url_l, {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow'
    })
    .then(response => {return response.json()})
    .then(response =>  { console.log(response.length);
      if (response.length > 0) {
        var res = response[0];
        console.log(res);
        cookies.set("id", res.id, { path: "/" });
        cookies.set("imagen", (res.imagen), { path: "/" });
        cookies.set("nombre", res.nombre, { path: "/" });
        cookies.set("correo", res.correo, { path: "/" });
        cookies.set("rol", res.rol, { path: "/" });
        alert(`Bienvenido ${res.nombre} ${res.rol}`);
        CloseModal(false);
        window.location.href = "../";
        history.push("/");
      } else {
        alert("Credenciales Incorrectas, Porfavor intente de nuevo");
      }})
    .catch(error => console.log('error', error));

    /*
    
    await axios.post(url_l, data ,headers)
      .then((response) => {
        console.log(response.data);
        return response.data; // ! Retornamos Respuesta para evaluarla
      })
      .then((response) => {
        if (response.length > 0) {
          var res = response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("imagen", (res.imagen), { path: "/" });
          cookies.set("nombre", res.nombre, { path: "/" });
          cookies.set("correo", res.correo, { path: "/" });
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
      
    */
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