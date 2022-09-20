import { Link } from 'react-router-dom';
import icono_carrito from "../imagenes/carrito.svg";
import CartContext from "../context/CartContext";
import React, { useContext, useState, useEffect } from "react";

const Carrito = () => {

    const {carrito} = useContext(CartContext);
    const [numIcono, setNumIcono] = useState();

    useEffect ( () => {
        setNumIcono(carrito.length);
        }, [carrito.length]
    );

    return (
        <>
            <div><Link to={`/carrito`}><img src={icono_carrito} alt="mununuras.ar" /></Link></div>
            <div style={{ opacity: carrito.length > 0 ? 1 : 0 }} className="monto carro_font">{numIcono}</div>
        </>
    );
};

export default Carrito;