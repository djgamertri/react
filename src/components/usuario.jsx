import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'
import Editar from './editar'
import Eliminar from './eliminar';
import "./usuario.css"


const Usuario = () => {
    
    const cookies = new Cookies();
    const history = useHistory();
    const url_l = "http://localhost/Api/usuarios.php";
    const [resultado, setresultado] = useState([])
    const [OpenModal, setOpenModal] = useState(false)
    const [OpenModalE, setOpenModalE] = useState(false)
    const [Actualiza, setActualiza] = useState(false)
    const [UserID, setUserID] = useState(0)
    const Peticion = () => {
        axios.get(url_l)
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            setresultado(data)
            setActualiza(false)
        })
    }

    const preEnvio = (e) =>{
        e.preventDefault();
    }
    
    // ! Aqui hacemos la peticion a la api cuando carga el componente
    
    useEffect(()=>{
        if (cookies.get("rol") != "Administrador"){
            history.push("/");
        }
        Peticion();
    }, [])

    // ? Aqui intentamos hacer la funcion de Eliminar/Inactivar
    
    const EditarID = (id) => {
        const IdUser = id;
        setUserID(IdUser)
        setOpenModal(true);
    }

    const EliminarID = (id) => {
        const IdUser = id;
        setUserID(IdUser)
        setOpenModalE(true);
    }

  return (
    <main>
    <h1>Usuarios</h1>
        <div className="table">
        <table>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>
            {
                resultado.map(item => (
                    <tr key={item.id}> 
                    <td> {item.id} </td>
                    <td> {item.nombre} </td>
                    <td> {item.correo} </td>
                    <td> {item.pass} </td>
                    <td> {item.rol} </td>
                    
                    <td><a className="Edit" id="Edit" onClick={() => preEnvio & EditarID(item.id)} href="#">Editar </a>
                    |
                    <a className="Delete" id="Delete" onClick={() => preEnvio & EliminarID(item.id)} href="#"> Borrar</a>
                    </td>
                    </tr>
                ))
            }
        </table>
        </div>
        {OpenModal && <Editar CloseModal={setOpenModal} actulizar={setActualiza} idusuario={UserID} />}
        {OpenModalE && <Eliminar CloseModal={setOpenModalE} actulizar={setActualiza} idusuario={UserID} />}
        {Actualiza ? Peticion() : "" }

    </main>
  )
}

//onClick={() => {setOpenModal(true);}}

export default Usuario