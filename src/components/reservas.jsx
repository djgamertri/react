import axios from 'axios'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect} from 'react'

import AdminNav from "./navbars/AdminNav";
import VerReserva from './eliminar_reserva';
import "./usuario.css"

const Reservas = () => {

  const cookies = new Cookies();
  const history = useHistory();
  const url_l = "https://api-barbershop.000webhostapp.com/usuarios.php";
  const url_r = "https://api-barbershop.000webhostapp.com/reserva.php";
  const [resultado, setresultado] = useState([])
  const [Reservas, setReservas] = useState([])
  const [OpenModalE, setOpenModalE] = useState(false)
  const [Actualiza, setActualiza] = useState(false)
  const [UserID, setUserID] = useState(0)

  const Peticion = () => {
      axios.get(url_l)
      .then((response) => {
          const data = response.data;
          setresultado(data)
      })
  }

  const PeticionR = (id) => {
    axios.get(url_r,{
      params: {
      id: id
      },
  })
      .then((response) => {
          const data = response.data;
          setReservas(data)
      })
  }

  const actualizar = () =>{
    Peticion();
    PeticionR(UserID);
    setActualiza(false)
  }
  
  const preEnvio = (e) =>{
    e.preventDefault();
  }

  useEffect(()=>{
      if (cookies.get("rol") != "Administrador"){
          history.push("/");
      }
      Peticion();
  }, [])

  const EliminarID = (id) => {
      const IdUser = id;
      setUserID(IdUser)
      setOpenModalE(true);
  }



  return (
    <main>
    <AdminNav/>
    <h1>Reservas</h1>
    {
      UserID ? 
      
      <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
            {
                Reservas.map(item => (
                    <tr key={item.id}> 
                    <td> {item.Id} </td>
                    <td> {item.Nombre} </td>
                    <td> {item.NombreS} </td>
                    <td> {item.Fecha} </td>
                    
                    <td><a className="Edit" id="Edit" onClick={() => preEnvio & EliminarID(item.Id)} href="#">Eliminar</a>
                    </td>
                    </tr>
                ))
            }
        </table>
        </div>
      
      : 
      
      
        <div className="table">
        <table>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>
            {
                resultado.map(item => (
                    <tr key={item.id}> 
                    <td> {item.id} </td>
                    <td> {item.nombre} </td>
                    <td> {item.correo} </td>
                    <td> {item.rol} </td>
                    
                    <td><a className="Edit" id="Edit" onClick={() => preEnvio & PeticionR(item.id) & setUserID(item.id)} href="#">Ver Reserva</a>
                    </td>
                    </tr>
                ))
            }
        </table>
        </div>
    }
    

        

        {OpenModalE && <VerReserva CloseModal={setOpenModalE} actulizar={setActualiza} idreserva={UserID} id={setUserID} />}
        {Actualiza ? actualizar() : null }

    </main>
  )
}

export default Reservas