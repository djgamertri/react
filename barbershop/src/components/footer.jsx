import React from 'react'
import "./footer.css"
import img_footer from ".././img/footer-img.png"

const Footer = () => {
  return (
    <div>
    <section id="footer">
        <img src={img_footer} className="footer-img"/>
        <div className="title-text">
            <p>Contacto</p>
            <h1>Visita nuestra Barberia</h1>
        </div>
        <div className="footer-row">
            <div className="footer-left">
                <h1>Horario</h1>
                <p>lunes a sabado - 9am a 9pm</p>
                <p>domingos - 9am a 4pm</p>
            </div>
            <div className="footer-right">
                <h1>Local</h1>
                <p>Tv. 126b #132f18, Bogotá</p>
                <p>barbershoptwins2@gmail.com</p>
                <p>+57 301-380-0012</p>
            </div>
        </div>
        <div className="links">
            <i></i>
        </div>
    </section>
    </div>
  )
}
export default Footer