import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "./usuario.css"

const Usuario = () => {
    
    const url_l = "http://localhost/Api/usuarios.php";
    const [resultado, setresultado] = useState([])

    // ! Aqui hacemos la peticion a la api cuando carga el componente

    useEffect(()=>{
        axios.get(url_l)
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            setresultado(data)
        })
    }, [])

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
                    
                    <td><a className="Edit" id="Edit" usuario="" href="#">Editar </a>
                    |
                    <a className="Delete" id="Delete" usuario="" href="#"> Borrar</a>
                    </td>
                    </tr>
                ))
            }
        </table>
        </div>
    </main>
  )
}

export default Usuario