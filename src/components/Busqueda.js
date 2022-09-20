import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Busqueda = () => {

    const [buscar, setBuscar] = useState();

    const manejadorDeEvento = (e) => {
        setBuscar(e.target.value);
    }

    return (<div className="busqueda fadeIn">
            <input placeholder="buscar" type="text" name="busqueda" onChange={manejadorDeEvento}/>
            <Link className="saber" to={`/busqueda/${buscar}`}>buscar</Link>
            </div>
    )
}

export default Busqueda;