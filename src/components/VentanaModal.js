import React from 'react';

const VentanaModal = ({mensajeModal, cerrarModal}) => {

    return(
        <>
            <div id="item_agregado_show">
                <div id="item_agregado">
                    <p className>{mensajeModal}</p>
                    <button className="cerrar_cartelito" onClick={ () => cerrarModal(false) }>X</button>
                </div>
            </div>
        </>
    )
}

export default VentanaModal;