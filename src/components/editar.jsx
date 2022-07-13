import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import "./login.css";

const Editar = ({CloseModal, idusuario}) => {

    const {id} = idusuario;
    const [resultado, setresultado] = useState([])
    const url_e = "http://localhost/Api/Editaruser.php";
    const Peticion = () => {
        axios.get(url_e,{
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
        Peticion();
    }, [])

  return (
    <div>
        <section className="modal_editar">
            <div className="contenedor_modal">
            <a href="#" id="close_modal_e" className="modal_close" onClick={() => CloseModal(false)}>
                X
            </a>
            <br />
            <form className="form" autoComplete="off">
                <h1>Editar Usuario</h1>
                {
                    resultado.map(item => (<>
                        <input type="hidden" id="id_user" name="id" key={item.id} value={item.id} />
                        <input type="text" id="name" required name="username" placeholder="Username" defaultValue={item.nombre} />
                        <input type="email" id="email" required name="email" placeholder="Email" defaultValue={item.correo} />
                        <input type="password" id="pass" required name="password" placeholder="Password" defaultValue={item.pass} />
                        <select name="Rol" id="rol" className="N1">
                            <option value={item.rol}>{item.rol}</option>
                        </select>
                        <input type="submit" name="" defaultValue="Actualizar" />
                        </>
                    ))
                }
                
            </form>
            <div id="warnings_r">
                <p id="mensaje_r" />
            </div>
            </div>
        </section>

    </div>
  )
}

export default Editar