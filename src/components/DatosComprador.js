import React from 'react';

const DatosComprador = ({nombre, apellido, email, area, telefono, calle, numero, cp, documento}) => {

    return (
        <div className="desglose">
            <div>
                Nombre completo: <span>{nombre} {apellido}</span>. 
            </div>
            <div>
                DNI nº: <span>{documento}</span>. 
            </div>
            <div>
                Dirección: <span>{calle} {numero}</span>(cp: {cp}). Teléfono: <span>{area}{telefono}</span>.
            </div>
            <div>
                Email: <span>{email}</span>.
            </div>
        </div>
    )
}

export default DatosComprador;