import React from 'react';
import { Link } from 'react-router-dom';
import isologo from "../../imagenes/mununuras_logo.svg";

const Logo = () => {
    return (
        <Link to={`/`}>
            <img src={isologo} alt="mununuras.ar. Bienvenidos a nuestro sitio!" className="isologo"/>
        </Link>
    );
}

export default Logo;