import CartContext from "../context/CartContext";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { rejectPayment } from "../services/apiResources";

const TicketRechazado = () => {

    const {setCarrito, idCompra} = useContext(CartContext);

    const [idCompraRealizada] = useState( () => {
        const idEnStorage = JSON.parse(sessionStorage.getItem("idDeLaCompraRealizada"));
        return idEnStorage || idCompra;
    });


    useEffect( () => {
        rejectPayment(idCompraRealizada)
        .then( (res) => console.log(res))
        .catch((e) => console.log(e))
        .finally(() => {
            setCarrito([])
        })
    },[idCompraRealizada, setCarrito]);
    
    return (
        <section>
            <div className="fondo_check fadeIn">
                <div className="formulario_container">
                    <div className="titulo">Lo sentimos! Tu pago fué rechazado.</div>
                    <Link className="boton_pagos" to={`/carrito`}>Volver al carrito</Link>
                </div>
            </div>
        </section>
        )
    }
    
    export default TicketRechazado;
    