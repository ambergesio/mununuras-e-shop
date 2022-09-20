import React from 'react';
import { Link } from "react-router-dom";
import error from "../../imagenes/error_404.svg";

const Error = () => {
    return (
        <div className="error__404">
            <div className="error__texto--imagen">
                <div className="error__texto">
                    <h1><span>Caramba!,</span> parece que algo <span>no salió</span> de la forma esperada.</h1>
                </div>
                <div>
                    <img className="error__imagen" src={error} alt="error_404" />
                </div>
            </div>
        <div className="error__boton">
            <Link to={'/'}>volver a la tienda</Link>
        </div>
    </div>
    )
}

export default Error;