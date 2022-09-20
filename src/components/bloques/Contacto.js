import contacto_img from "../../imagenes/ovillos_cntct.jpg";
import React, { useEffect } from "react";

const Contacto = () => {

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    return (
        <>
        <div>
            <h2>Contactate con nosotros</h2>
        </div>
        <section className="fadeIn">
            <div>
                <form action="" className="contacto__formulario sombra">
                    <input type="text" placeholder="Tu nombre" required />
                    <input type="email" placeholder="Tu email" required />
                    <textarea rows="8" placeholder="Tu mensaje va acá" required></textarea>
                    <select name="como">
                        <option defaultValue="0" disabled>Seleccioná aquí como nos conociste</option>
                        <option value="1">Una amiga</option>
                        <option value="2">Google</option>
                        <option value="4">Instagram</option>
                    </select>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <div>
                <img className="contacto__imagen" src={contacto_img} alt="imagen seccion" />
            </div>
        </section>
        </>
    );
}

export default Contacto;