import axios from 'axios'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect} from 'react'

import AdminNav from "./navbars/AdminNav";
import UserNav from "./navbars/UserNav";
import EliminarReserva from './eliminar_reserva';

function Mis_reservas() {

  const cookies = new Cookies();
  const history = useHistory();
  const idUser = cookies.get("id")
  const url = "https://api-barbershop.000webhostapp.com/reserva.php";
  const [Reservas, setReservas] = useState([])
  const [Actualiza, setActualiza] = useState(false)
  const [OpenModalE, setOpenModalE] = useState(false)
  const [ReservaID, setReservaID] = useState(0)

  const Peticion = () => {
    axios.get(url,{
      params: {
      id: idUser
      },
  })
  .then((response) => {
      const data = response.data;
      setReservas(data)
      setActualiza(false)
  })
  }

  useEffect(()=>{
    if (!cookies.get("rol")){
        history.push("/");
    }
    Peticion();
  }, [])

  const EliminarID = (id) => {
    const IdReserva = id;
    setReservaID(IdReserva)
    setOpenModalE(true);
  }
  const preEnvio = (e) =>{
    e.preventDefault();
  }


  return (
    <main>
      {
        cookies.get("rol") != "usuario" ?
    <AdminNav/>
    :  <UserNav/>
      }
    <div>
      <h1>Mis reservas</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Servicio</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
        { Reservas.map((item) => (
          <tr key={item.id}>
            <td> {item.Id} </td>
            <td> {item.Nombre} </td>
            <td> {item.NombreS} </td>
            <td> {item.Fecha} </td>

            <td>
              <a className="Edit" id="Edit" onClick={() => preEnvio & EliminarID(item.Id)} href="#">Eliminar</a>
            </td>
          </tr>
        ))}
      </table>
    </div>

    {OpenModalE && <EliminarReserva CloseModal={setOpenModalE} actulizar={setActualiza} idreserva={ReservaID} />}
    {Actualiza ? Peticion() : null }
    </main>
  );
}

export default Mis_reservas