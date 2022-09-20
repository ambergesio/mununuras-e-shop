import ConsultaOrden from "./ConsultaOrden";
import React, { useState, useEffect} from 'react';

const MisOrdenes = () => {

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    const [mostrarOrden, setMostrarOrden] = useState(false);
    const [idOrden, setIdOrden] = useState("");
    const [ingresoValido, setIngresoValido] = useState(false);

    const modal = () => {
        setMostrarOrden(!mostrarOrden);
    }

    const ingresoIdOrden = (e) => {
        setIdOrden(e.target.value);
    }
    useEffect( () => {
        if (idOrden.trim().length) setIngresoValido(true);
        else setIngresoValido(false);
    }, [idOrden])

    return(
        <>
        <div>
            <h2>Conocé el estado de tu orden</h2>
        </div>
        <section>
            <div>
                <div className="contacto__formulario sombra fadeIn">
                    <input type="text" placeholder="id de la orden" onChange={ingresoIdOrden} name="consulta"/>
                    { ingresoValido
                    ? <button className="saber" onClick={modal}>consultar</button>
                    : null }
                </div>
            </div>
        </section>
        { mostrarOrden
        ? <ConsultaOrden idOrden={idOrden} modal={modal} />
        : null }
        </>
    );
}

export default MisOrdenes;