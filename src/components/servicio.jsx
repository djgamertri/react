import React from 'react'
import "./servicio.css"
import img1 from ".././img/pic-1.jpg"
import img2 from ".././img/pic-2.jpg"
import img3 from ".././img/pic-3.jpg"
import img4 from ".././img/pic-4.jpg"

const Servicio = () => {
  return (
      <div>
        <section id="servicio">
        <div className="title-text">
            <p>Servicio</p>
            <h1>¿Que Hacemos?</h1>
        </div>
        <div className="servicio-box">
            <div className="servicio1">
                <img src={img1} id="imagen1"/>
                <div className="overlay"></div>
                <div className="servicio-desc">
                    <h3>Desvanecidos</h3>
                    <hr/>
                    <p>El estilo que mejor refleja su personalidad</p>
                </div>
            </div>
            <div className="servicio1">
                <img src={img2} id="imagen2"/>
                <div className="overlay"></div>
                <div className="servicio-desc">
                    <h3>Barba</h3>
                    <hr/>
                    <p>Definicion de barba</p>
                </div>
            </div>
            <div className="servicio1">
                <img src={img3} id="imagen3"/>
                <div className="overlay"></div>
                <div className="servicio-desc">
                    <h3>Manicura</h3>
                    <hr/>
                    <p>El cuidado de tus manos</p>
                </div>
            </div>
            <div className="servicio1">
                <img src={img4} id="imagen4"/>
                <div className="overlay"></div>
                <div className="servicio-desc">
                    <h3>Color, Brillo y Suavidad</h3>
                    <hr/>
                    <p>El marco de tu rostro</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
export default Servicio