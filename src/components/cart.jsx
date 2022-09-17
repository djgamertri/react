import { useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react'

import "./cart.css"
import Checkout from './checkout';
import Items from './items'
import {CartContext} from './context/CartContext'

const Cart = () => {

    const history = useHistory();
    const {CartItems} = useContext(CartContext)
    const [OpenModal, setOpenModal] = useState(false)
    const [OpenCart, setOpenCart] = useState(false)
    const total = CartItems.reduce((previous, current) => previous + current.amount * current.precio,0);
    const Formato = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }

  return (
    <div className='Contenedor'>
        <div className='Contenedor-Boton' onClick={() => setOpenCart(!OpenCart)}>
            <h1 className='Boton'>{ !OpenCart ? <i class="las la-shopping-cart"></i> : <i class="las la-times"></i> }</h1>
            {
                !OpenCart &&
                <div className='Cantidad'>{CartItems.length}</div>
            }
        </div>
        {
            CartItems && OpenCart && 
            <div className='Contenedor-cart'>
                <h2>Tu carrito</h2>
                {
                    CartItems.length == 0 ? 
                    <p className='Vacio'>Tu carrito esta vacio</p>
                    : <div className='Items'>
                    {
                        CartItems.map(item => (
                            <Items Item={item} />
                        ))
                    }
                    </div>
                    
                }
                <div className='Total'>
                    <h2 >Total: ${Formato(total)}</h2>
                    {
                        CartItems.length == 0 ? 
                        null : <button onClick={() => {setOpenModal(true);}}>Reservar</button>
                    }
                </div>
            </div>
        }
        {OpenModal && <Checkout CloseModal={setOpenModal}/>}
    </div>
  )
}

export default Cart