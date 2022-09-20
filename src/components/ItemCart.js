import tacho from "../imagenes/tachito_borrar.svg";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const ItemCart = ( {item, borrarDelCarrito} ) => {

    let subtotal = item.quantity * item.unit_price;
    const [fade, setFade] = useState(false);
    const apagar = () => {
        setFade(!fade);
    }
    return (
        <div className={fade ? 'flexrow apagado': 'flexrow prendido'}>
        <article className="item fadeIn">
            <div className="item__imagen__descripcion">
                <div className="item__imagen">
                    <Link to={`/producto/${item._id}`}>
                        <img src={item.picture_url} alt={item.altimg} title={item.title} />
                    </Link>
                </div>
                <div className="item__descripcion">
                    <h4>{item.title}</h4>
                    <p title={item.description}>{item.description.substring(0, 43)}...</p>
                </div>
            </div>
            <div className="importe__cantidad__subtotal__delete">
                <div className="item__importe">
                    <p title="Precio por unidad">${item.unit_price}</p>
                </div>
                <div className="item__cantidad">
                    <p>cantidad: {item.quantity}</p>
                </div>
                <div className="item__subtotal">
                    <p>Subtotal: $<span>{subtotal}</span></p>
                </div>
                <div className="item__delete">
                <img onClick={ ()=> {borrarDelCarrito(item.name, item.id); apagar();} } src={tacho} alt="eliminar" title={`eliminar "${item.title}" del carrito`} />
                </div>
            </div>
        </article>
        <div className="aclara_cant">
            <p>* Stock disponible de {item.title}: {item.stock} unidad/es. Para cambiar la cantidad hacer click en la imagen</p>
        </div>
    </div>
    );
}

export default ItemCart;