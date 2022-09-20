import React from 'react';
import banner from "../../imagenes/carr_mg_osito.jpg";

const Banner = () => {
    return (
        <>
        <div className="pad">
            <img className="contenedor__bordeinferior--rojo contenedor__bordesuperior--amarillo" src={banner} width="100%" height="100%" alt="Amiguitos de hilo para tu bebé" />
        </div>
        </>
    );
};
export default Banner;