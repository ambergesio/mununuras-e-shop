import React from 'react';
import logo_foot from "../../imagenes/logo_foot.svg";
import instagram_img from "../../imagenes/redes/insta.svg";
import youtube_img from "../../imagenes/redes/youtube.svg";

const Footer = () => {
    return (
        <>
        <footer className="contenedor__bordesuperior--rojo">
            <section>
                <article>
                    <div>
                        <img src={logo_foot} alt="mununuras.ar"/>
                    </div>
                    <div>
                        <p className="seguinos">Seguinos en nuestras redes sociales:</p>
                    </div>
                    <div className="footer__logos">
                        <div>
                            <a href="http://www.instagram.com/mununuras" target="_blank" rel="noreferrer"><img src={instagram_img} alt="mununuras.ar"/></a>
                        </div>
                        <div>
                            <a href="http://www.youtube.com" target="_blank" rel="noreferrer"><img src={youtube_img} alt="mununuras.ar"/></a>
                        </div>
                    </div>
                </article>
                <article className="footer__formulario">
                    <form action="" className="footer__formulario--campos">
                            <legend>Recibí nuestras novedades en tu mail.</legend>
                            <label htmlFor="nombre"></label>
                            <input type="text" name="nombre" placeholder="tu nombre" required /><br />
                            <label htmlFor="dir_correo"></label>
                            <input type="email" name="dir_correo" placeholder="tu dirección de mail" required /><br />
                            <input type="submit" value="Suscribirme" id="envio_suscripcion" />
                        </form>
                </article>
            </section>
                <div className="centrar">
                    <p className="datos"><a href="mailto:info@mununuras.ar">info@mununuras.ar</a>. - <strong>2021</strong> - Mununuras.ar - Punta Alta - Buenos Aires - Argentina.</p>
                </div>
        </footer>
    </>
    );
}

export default Footer;