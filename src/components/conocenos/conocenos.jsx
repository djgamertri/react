import React from 'react'
import "./conocenos.css"
import Man from "../../img/barber-man.jpg"

const Conocenos = () => {
  return (
    <div>
    <section id="Conocenos">
        <div class="title-text">
            <p>Conocenos</p>
            <h1>¿Quienes Somos?</h1>
        </div>
        <div class="Conocenos-box">
            <div class="Conocenos1">
                <h1>BarberShop Twins</h1>
                <div class=" Conocenos-desc">
                    <div class="Conocenos-icon"></div>
                    <div class="Conocenos-text">
                        <p>Es una Empresa de barberia y de estilistas que ayuda a las personas para se vean como ellos quieren</p>
                    </div>
                </div>
            </div>
            <div class="Conocenos-img">
                <img src={Man} id="imagen0" alt='' />
            </div>
        </div>
    </section>
    </div>
  )
}
export default Conocenos