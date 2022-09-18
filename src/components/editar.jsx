import md5 from 'md5';
import axios from 'axios';
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, { useRef, useState, useEffect} from 'react'
import "./login.css";

const Editar = ({CloseModal, idusuario, actulizar}) => {

    const {id} = idusuario;
    const [resultado, setresultado] = useState([])
    const [Roles, setRoles] = useState([])
    
    const url = "https://api-barbershop.000webhostapp.com/Editaruser.php";
    const url_r = "https://api-barbershop.000webhostapp.com/Roles.php";

    const cookies = new Cookies();
    const history = useHistory();
    const RefNombre = useRef(null);
    const RefCorreo = useRef(null);
    const RefPass = useRef(null);
    const Refrol = useRef(null);

    const Peticion = () => {
        axios.get(url,{
            params: {
            id: idusuario
            },
        })
        .then((response) => {
            console.log(response.data)
            const data = response.data;
            setresultado(data)
        })
    }
    const Rol = () =>{
        axios.get(url_r)
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            setRoles(data)
            
        })
    }

    useEffect(()=>{
        if (cookies.get("rol") != "Administrador"){
            history.push("/");
        }
        Rol();
        Peticion();
    }, [])

    const preEnvio = (e) =>{
        e.preventDefault();
        Envio();
      }

    const Envio = async() =>{

        const data = {
            id: idusuario,
            nombre: RefNombre.current.value,
            correo: RefCorreo.current.value,
            pass: md5(RefPass.current.value),
            rol: Refrol.current.value,
        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then(response => response.text())
          .then(result =>  { result = JSON.parse(result)
            if (result == "Actualizado"){
                alert("Actulizado con exito")
            }else{
                alert("Ha ocurrido un error")
            }
            CloseModal(false);
            actulizar(true);
    
          })
        .catch(function (error) {
            console.log(error);
            Peticion()
        });

    /*
    await axios.post(url, {
        id: idusuario,
        nombre: RefNombre.current.value,
        correo: RefCorreo.current.value,
        pass: md5(RefPass.current.value),
        rol: Refrol.current.value,
    })
    .then((response) => {
        if (response.data == "Actualizado"){
            alert("Actulizado con exito")
        }else{
            alert("Ha ocurrido un error")
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
        <section className="modal_editar">
            <div className="contenedor_modal">
            <a href="#" id="close_modal_e" className="modal_close" onClick={() => CloseModal(false)}>
                X
            </a>
            <br />
            <form className="form" autoComplete="off" onSubmit={preEnvio}>
                <h1>Editar Usuario</h1>
                {
                    resultado.map(item => (<>
                        <input type="hidden" id="id_user" name="id" key={item.id} value={item.id} />
                        <input type="text" id="name" required name="username" placeholder="Username" ref={RefNombre} defaultValue={item.nombre} />
                        <input type="email" id="email" required name="email" placeholder="Email" ref={RefCorreo} defaultValue={item.correo} />
                        <input type="password" id="pass" required name="password" placeholder="Password" ref={RefPass}/>
                        <input type="file" id="img"/>
                        <select name="Rol" id="rol" className="N1" ref={Refrol}>
                        {
                            Roles.map(rol => (
                                <option value={rol.id} >{rol.rol}</option>
                            ))
                        }
                        </select>
                        <input type="submit" name="" onSubmit={preEnvio} defaultValue="Actualizar" />
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