import axios from 'axios'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, {useContext, useState, useEffect} from 'react'

import "./productos.css"
import Cart from './cart';
import UserNav from "./navbars/UserNav";
import {CartContext} from './context/CartContext'


const Productos = () => {
    
    const cookies = new Cookies();
    const history = useHistory();
    const {Añadir} = useContext(CartContext)
    const [resultado, setresultado] = useState([])
    const url = "http://api-barbershop.000webhostapp.com/productos.php";


    const Peticion = () => {
        axios.get(url)
        .then((response) => {
            const data = response.data;
            setresultado(data)
        })
    }

    useEffect(()=>{
        Peticion();
        if (!cookies.get("rol")){
            history.push("/");
        }
    }, [])

  return (
    <>
    <UserNav/>
    <main>
        <Cart/>
        <h1>Productos</h1>
        <br />
        <div className='content-service'>
        {
            resultado.map(item => (
                <div key={item.id} className="service">
                    <div>
                        <h1>{item.nombre}</h1>
                        <p>{item.precio}</p>
                    </div>
                    <button onClick={() => Añadir(item)} >Agregar</button>
                </div>
            ))
        }
        </div>
    </main>
    </>
  )
}

export default Productos