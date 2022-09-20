import CartContext from "../context/CartContext";
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";

const TicketPendiente = () => {

    const { setCarrito, idCompra} = useContext(CartContext);




    useEffect(()=>{
        setCarrito([]);
    },[setCarrito]);
    
    return (
        <section>
            <div className="fondo_check fadeIn">
                <div className="formulario_container">
                    <div className="titulo">El pago quedó pendiente.</div>
                    <div className="texto">Nos vamos a comunicar con vos para hacer un seguimiento del estado. Podés chequear el estado con el id {idCompra}</div>
                    <Link className="boton_pagos" to={`/`}>Volver a la tienda</Link>
                </div>
            </div>
        </section>
        )
    }
    
    export default TicketPendiente;