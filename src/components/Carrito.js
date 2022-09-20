import CartContext from "../context/CartContext";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import tachito from "../imagenes/tachito_borrar.svg";
import Formulario from "./Formulario";
import OrdenDeCompraCreada from "./OrdenDeCompraCreada";

const Carrito = () => {

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);
    const [finalizar, setFinalizar] = useState(false);
    const [mostrarResumen, setMostrarResumen] = useState(false);
    
    const checkout = () => {
        setFinalizar(!finalizar);
    }

    const resumen = () => {
        setMostrarResumen(!mostrarResumen);
    }

    return (
        <>
        <h2>Carrito de compras</h2>
        { carrito.length > 0
        ? <div className="vaciar_carrito"><img onClick={vaciarCarrito} src={tachito} alt="" /><p>vaciar el carrito</p></div>
        : null } 

        <section>
        { carrito.length > 0
        ? carrito.map( (item) => <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} />)
        : <article className="fadeIn"><div className="sinstock_nohay">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="sin_items">Tienda</span></Link></div></article> }
        </section>

        { carrito.length > 0
        ? <div className="total fadeIn"><div className="importe__total"><p>Total: $<span> {precioTotal}</span></p><button onClick={checkout} id="botonCheckout" className="checkout">Check out</button></div></div>
        : null }

        { finalizar
        ? <Formulario checkout={checkout} resumen={resumen} /> 
        : null }
        
        { mostrarResumen
        ? <OrdenDeCompraCreada />
        : null}
        </>
    );
}

export default Carrito;