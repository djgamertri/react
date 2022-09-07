import md5 from "md5";
import axios from "axios";
import Cookies from "universal-cookie";
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css";

const Register = ({CloseModal}) => {

    const RefUser = useRef(null);
    const RefCorreo = useRef(null);
    const RefPass = useRef(null);
    const cookies = new Cookies();
    const history = useHistory();
    const url = "http://localhost/Api/usuario.php";

    useEffect(()=>{
        if (cookies.get("nombre")) {
            history.push("/");
          }
    }, [])

    const preEnvio = (e) =>{
        e.preventDefault();
        Envio();
    }

    const Envio = async() =>{
        await axios.put(url, {
            username: RefUser.current.value,
            email: RefCorreo.current.value,
            password: md5(RefPass.current.value),
        })
        .then((response) => {
            switch (response.data) {
                case "Usuario Registrado":
                    alert("Usuario Registrado")
                    CloseModal(false);
                    break;
                case "El usuario que desea registrar ya existe":
                    alert("El usuario que desea registrar ya existe")
                    CloseModal(false);
                    break;
                default:
                    alert("Error al Registar")
                    CloseModal(false);
                    break;
            }
    
          })
        .catch(function (error) {
            console.log(error);
        });
    }
  

  return (
    <div>
        <section class="modal_register">
            <div class="contenedor_modal">
                <a href="#" id="close_modal_r" class="modal_close" onClick={() => CloseModal(false)}>X</a>
                <form class="form" autocomplete="off"  onSubmit={preEnvio}>
                    <h1>Register</h1>
                    <input type="text" required id="user_r" name="username" ref={RefUser} placeholder="Username" />
                    <input type="email" required id="email_r" name="email" ref={RefCorreo} placeholder="Email"/>
                    <input type="password" required id="pass_r" name="password" ref={RefPass} placeholder="Password"/>
                    <input type="submit" id="boton_r" name="" value="Register"  onSubmit={preEnvio}/>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Register