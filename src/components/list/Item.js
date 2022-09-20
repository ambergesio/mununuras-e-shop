import { Link } from 'react-router-dom';
import ItemStockDisponible from '../ItemStockDisponible';
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import carritoico from "../../imagenes/incart.svg";
import ItemCategory from "../ItemCategory";


const Item = ({_id, id, category, title, name, description, unit_price, picture_url, altimg, stock}) => {

    const {carrito} = useContext(CartContext);
    const [cantidadActual, setCantidadActiual] = useState();
    const [estaEnCarrito, setEstaEnCarrito] = useState(false);

    useEffect( () => {
        carrito.forEach( item => {
            if (item.id === id) { setCantidadActiual(item.quantity); }
        })
    }, [carrito, id])

    useEffect( () => {
        carrito.forEach((item) => { 
            if (item.id === id) { setEstaEnCarrito(true); }
        })
    }, [carrito, id]);

    return (<>
        <article className="prod_card fadeIn sombra">
            {estaEnCarrito
            ? <div className="en_tu_carrito fadeIn">
                <Link to={'/carrito'}><img src={carritoico} alt="" title={`"${name}" está en tu carrito (${cantidadActual})`}/></Link>
            </div>
            : null }
            <p className="categorias">-
            {category.map( (item) => <ItemCategory key={item} item={item} />)}
            </p>
            <div className="prod_titulo">{title.charAt(0).toUpperCase()}{title.slice(1)}</div>
            <p className="description">{description.substring(0,100)}...</p>
            <img src={picture_url} alt={altimg}></img>
            <ItemStockDisponible stock={stock} unit_price={unit_price} />
            <div className="producto_agregar_saber">
                <Link className="saber" to={`/producto/${_id}`}>ver detalles del producto</Link>
            </div>
        </article>
    </>)
};

export default Item;