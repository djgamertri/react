import axios from 'axios';
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import "./login.css";

const Eliminar = ({CloseModal, idusuario, actulizar}) => {
    
    const history = useHistory();
    const cookies = new Cookies();
    const [resultado, setresultado] = useState([])
    const url = "https://api-barbershop.000webhostapp.com/Eliminaruser.php";

    const Peticion = () => {

        axios.get(url,{
            params: {
            id: idusuario
            },
        })
        .then((response) => {
            const data = response.data;
            setresultado(data)
        })
    }

    useEffect(()=>{
        if (cookies.get("rol") != "Administrador"){
            history.push("/");
        }
        Peticion();
    }, [])

    const preEnvio = (e) =>{
        e.preventDefault();
        Envio();
    }

    const Envio = async() => {

        const data = {
            id: idusuario
        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then(response => response.text())
          .then(result =>  { result = JSON.parse(result)
            if (result == "Usuario eliminado con exito"){
                alert("Usuario eliminado con exito")
            }else{
                alert("No se pudo eliminar este usuario")
            }
            CloseModal(false);
            actulizar(true);
          })
          .catch(error => console.log(error), Peticion());

        /*
        await axios.post(url, {
            id: idusuario
        })
        .then((response) => {
            if (response.data == "Usuario eliminado con exito"){
                alert("Usuario eliminado con exito")
            }else{
                alert("No se pudo eliminar este usuario")
            }
            CloseModal(false);
            actulizar(true);
    
          })
        .catch(function (error) {
            console.log(error);
            Peticion()
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
            {
                resultado.map(item => (<>
                    <h2 class="confirm" >¿Estás seguro de querer eliminar a este usuario?</h2>
                    <h1> {item.nombre} </h1>
                    <p className='parrafo'> - Esta accion no es reversible -</p>
                    <input type="hidden" id="id_user" name="id" key={item.id} value={item.id} />
                    <input type="submit" name="" id="boton" onSubmit={preEnvio} value="Eliminar" />
                    </>
                ))
            }
            </form>
          </div>
        </section>
      </div>
  )
}

export default Eliminar