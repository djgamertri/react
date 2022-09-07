import React, { useContext } from 'react'

import { CartContext } from './context/CartContext'
import "./item.css"

function Items({Item}) {
  
  const {Añadir, Eliminar} = useContext(CartContext)

  const {id} = Item

  const Formato = (numero) => {
    return new Intl.NumberFormat().format(numero)
  }
  return (
    <div className='Contenedor-item'>
      <div className='Datos'>
        <div className='Item-left'>
          <p>{Item.nombre}</p>
          <div className='Botones'>
          <button onClick={() => Añadir(Item)}>Agregar</button>
            <button onClick={() => Eliminar(Item)}>Eliminar</button>
          </div>
        </div>
        <div className='Item-right'>
          <div> {Item.amount} </div>
          <p>Total: ${Formato(Item.precio)} </p>
        </div>
      </div>
    </div>
  )
}

export default Items