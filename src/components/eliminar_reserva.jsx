import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import "./login.css";

const VerReserva = ({CloseModal, idreserva, actulizar, id}) => {
  
    const history = useHistory();
    const cookies = new Cookies();
    const [resultado, setresultado] = useState([])
    const url = "http://api-barbershop.000webhostapp.com/reserva.php";

    const Peticion = () => {
        axios.get(url,{
            params: {
            id_r: idreserva
            },
        })
        .then((response) => {
            const data = response.data;
            setresultado(data)
        })
    }

    useEffect(()=>{
        if (!cookies.get("rol")){
            history.push("/");
        }
        Peticion();
    }, [])

    const preEnvio = (e) =>{
        e.preventDefault();
        Envio();
    }

    const Envio = async() => {

        await axios.post(url, {
            id: idreserva
        })
        .then((response) => {
            if (response.data == "Reserva eliminado con exito"){
                alert("Reserva eliminado con exito")
            }else{
                alert("No se pudo eliminar esta reserva")
            }
            CloseModal(false);
            actulizar(true);
            id(idreserva);
    
          })
        .catch(function (error) {
            console.log(error);
            Peticion()
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
            {
                resultado.map(item => (<>
                    <h2 class="confirm" >¿Estás seguro de querer eliminar esta reserva?</h2>
                    <h1><span>Servicio:</span> {item.NombreS}</h1>
                    
                    <h1><span>Usuario:</span> {item.Nombre} </h1>
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

export default VerReserva