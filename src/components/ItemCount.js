import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({producto, stock, quantity, agregarAlCarrito, terminarCompra, setTerminarCompra, setDeshacerboton}) => {

    let [contador, setContador] = useState (quantity);

    const sumarCant = () => {
        if (contador < stock) {
            setContador(parseInt(contador + 1));
            setTerminarCompra(false);
        }
    }
    
    const restarCant = () => {
        if ( contador > 1) {
            setContador(parseInt(contador - 1));
            setTerminarCompra(false);
        }
    }

    return (
        <>
            <div className="prod_cantidad">
                <button className="boton_cant_detail" onClick={restarCant}>-</button>
                <p className="item__cant_detail">{contador}</p>
                <button className="boton_cant_detail" onClick={sumarCant}>+</button>
            </div>
            <div className="producto_agregar_saber_detail">
            { (stock > 0)
            ? ( terminarCompra ? <Link className="add_detail" to={`/carrito`}>Terminar la compra</Link> : <button className="add_detail" onClick={ () => { setTerminarCompra(true) ;agregarAlCarrito(producto, contador); setDeshacerboton(false);}} > { quantity === contador ? 'Agregar al carrito' : 'modificar cantidad' }</button> )
            : <button className="add_detail_disabled">Producto sin stock</button> }
            </div>
        </>
    );  
};

export default ItemCount;