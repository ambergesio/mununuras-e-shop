import CartContext from "../context/CartContext";
import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { paymentApproval, removeFromStock } from "../services/apiResources";

const TicketExito = () => {

    const { setCarrito, idCompra} = useContext(CartContext);

    const [idCompraRealizada] = useState( () => {
        const idEnStorage = JSON.parse(sessionStorage.getItem("idDeLaCompraRealizada"));
        return idEnStorage || idCompra;
    });
    
    useEffect( () => {
        removeFromStock(idCompraRealizada)
    }, [idCompraRealizada])

    useEffect(()=>{

        paymentApproval(idCompraRealizada)
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
        .finally(() => {
            setCarrito([])
        })

    },[idCompraRealizada, setCarrito]);
    
    return (
        <section>
            <div className="fondo_check fadeIn">
                <div className="formulario_container pad">
                    <div className="titulo">Tu compra se realizó con éxito!</div>
                    <div className="texto">utiliza el codigo <span>{idCompraRealizada}</span> para ver el detalle de tu compra</div>
                    <Link className="boton_pagos" to={`/`}>Volver a la tienda</Link>
                </div>
            </div>
        </section>
        )
    }
    
    export default TicketExito;