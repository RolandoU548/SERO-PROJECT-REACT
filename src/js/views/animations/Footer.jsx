import React from 'react';
import "../../../scss/footer.scss";
import "../../../css/glass.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className='footer glass'>
        <footer>
            <div className='row'>
                <div className='colPrincipal'>
                    <h2 className='logoFooter'>SERØ.</h2>
                    <p className='slogan'>La solucion a sus problemas</p>
                </div>
                <div className='col'>
                    <h3>Contact <div className="underline"><span></span></div> </h3>
                    <ul>
                        <li><a href="">Direccion</a></li>
                        <li><a href="">Numero de telefono</a></li>
                        <li><a href="">Correo electronico</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3>Links <div className="underline"><span></span></div> </h3>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Sobre nosotros</a></li>
                        <li><a href="">Fundadores</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3>Boletin informativo <div className="underline"><span></span></div> </h3>
                    <form className='formFooter'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder='Coloque su correo electronico' required/>
                        <button type='submit'><FontAwesomeIcon icon={faArrowRight} /></button>
                    </form>
                    <div className="social-icons">
                        <a href='' className='rrss'><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href='' className='rrss'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='' className='rrss'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='' className='rrss'><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </div>
            </div>
        <hr />
        <p className='copyright'>SERØ © 2023 - Todos los derechos reservados</p>
        </footer>
    </div>
  )
}
