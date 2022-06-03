import React from 'react'
import "./conocenos.css"
import Man from ".././img/barber-man.jpg"

const Conocenos = () => {
  return (
    <div>
    <section id="Conocenos">
        <div className="title-text">
            <p>Conocenos</p>
            <h1>¿Quienes Somos?</h1>
        </div>
        <div className="Conocenos-box">
            <div className="Conocenos1">
                <h1>BarberShop Twins</h1>
                <div className=" Conocenos-desc">
                    <div className="Conocenos-icon"></div>
                    <div className="Conocenos-text">
                        <p>Es una Empresa de barberia y de estilistas que ayuda a las personas para se vean como ellos quieren</p>
                    </div>
                </div>
            </div>
            <div className="Conocenos-img">
                <img src={Man} id="imagen0" alt='' />
            </div>
        </div>
    </section>
    </div>
  )
}
export default Conocenos