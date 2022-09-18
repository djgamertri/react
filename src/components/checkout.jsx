import {CartContext} from './context/CartContext'
import React ,{useContext, useState} from 'react'
import Cookies from 'universal-cookie'
import moment from "moment";
import axios from "axios";

import "./checkout.css"
import { getValue } from '@testing-library/user-event/dist/utils';

const Checkout = ({CloseModal}) => {

  const cookies = new Cookies();
  const {CartItems, EliminarTodo} = useContext(CartContext)
  const [Fecha, SetFecha] = useState(new Date());
  const formatDate = moment().format('DD-MM-YYYY')
  const url = "http://api-barbershop.000webhostapp.com/SubirReserva.php";

  const total = CartItems.reduce((previous, current) => previous + current.amount * current.precio,0);

  
const Formato = (numero) => {
  return new Intl.NumberFormat().format(numero)
}

  const Enviar = async() =>{

    const data = {
      id: cookies.get("id"),
      fecha: moment(Fecha).format('YYYY-MM-DD HH:mm'),
      cart: CartItems
    }
  

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result =>  { result = JSON.parse(result)
      switch (result) {
        case "Reserva Registrado":
            alert("Reserva Registrado")
            CloseModal(false);
            EliminarTodo();
            break;
        case "Error al reservar":
            alert("Lo sentimos no se ha podido registrar su reserva, porfavor intente mas tarde")
            CloseModal(false);
            break;
        default:
            alert("Error al reservar xd ")
            CloseModal(false);
            break;
      }
    })
    .catch(error => console.log('error', error));
    /*
    await axios.post(url, {
      id: cookies.get("id"),
      fecha: moment(Fecha).format('YYYY-MM-DD HH:mm:ss'),
      cart: CartItems
  })
  .then((response) => {
    switch (response.data) {
      case "Reserva Registrado":
          alert("Reserva Registrado")
          CloseModal(false);
          EliminarTodo();
          break;
      case "Error al reservar":
          alert("Lo sentimos no se ha podido registrar su reserva, porfavor intente mas tarde")
          CloseModal(false);
          break;
      default:
          alert("Error al reservar xd ")
          CloseModal(false);
          break;
    }

  })
  .catch((error) => {
    console.log(error);
  });*/
  }

  const sumarDias = (fecha, dias) =>{
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  } 
  console.log(moment(Fecha).format('YYYY-MM-DD HH:mm'));

  return (
    <section className='Modal-checkout'>
      <div className="checkout-container">
      <div className="Perfil-container">
        <p className='Perfil'>Perfil</p>
        <hr />
        <div>
          <p>Nombre: {cookies.get("nombre")}</p>
          <p>Correo: {cookies.get("correo")}</p>
        </div>
      </div>

      <div className="Order-container">
        <div className="Page-Scroll">
          <h1 className="Titulo">Orden</h1>
          <img src="https://www.svgrepo.com/show/12848/x-symbol.svg" className="Close" onClick={() => CloseModal(false)}/>
          <div>
            <img src="https://as01.epimg.net/epik/imagenes/2019/01/15/portada/1547570158_274598_1547571298_noticia_normal_recorte1.jpg" className="Imagen-principal"/>
          </div>

          <div className="Servicio">
              {CartItems.map(item => (
              <div className="Item">
                <p>{item.nombre} x {item.amount}</p>
                <p>{item.precio}</p>   
              </div>
              ))}
            <hr />
            <div className="Total-container">
              <p>Total</p>
              <p>{Formato(total)}</p>
            </div>
          </div>
          <div className="Terminos">
            <input type="checkbox" required className="Check" />
            <p>Estoy totalmente de acuerdo con recibir correos acerca de las novedades de BARBERSHOP TWINS.</p>
          </div>

          <div className='Fecha'>
            <label>Fecha y Hora</label>
				    <input type="DATETIME-LOCAL" min={moment(Fecha).format('YYYY-MM-DD HH:mm')} onChange={SetFecha}/>
          </div>

        </div>
        
        <div className="Boton-container">
          <button type="sumbit" className="Reservar" onClick={() => Enviar()}> Reservar </button>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Checkout