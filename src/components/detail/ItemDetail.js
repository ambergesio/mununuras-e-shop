import ItemStockDisponible from '../ItemStockDisponible';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import ImageSlider from './ImageSlider';
import ItemCategory from "../ItemCategory";
// import config from '../../congif';


const ItemDetail = ({producto}) => {

    useEffect(() => {
        window.scrollTo(0, 290)
    }, [])

    const {carrito, agregarAlCarrito, setDeshacerboton} = useContext(CartContext);
    const [terminarCompra, setTerminarCompra] = useState (false);

    useEffect(()=>{
        if (carrito.find( (item ) => item.id === producto.id)){
            setTerminarCompra(true);
        }
    }, [carrito, producto.id]);
    
    let quantity;
    let yaExiste = carrito.find( (item ) => item.id === producto.id);
    if (yaExiste) {
        quantity = parseInt(carrito.filter( (item) => item.id === producto.id).map((item) => item.quantity));
    } else {
        quantity = parseInt(producto.quantity);
    }

    return (
        <>
            { producto._id
            ?
            <article className="prod_card_detail fadeIn">
                <div className="prod_card_detail-img">
                { producto.imgslide.length > 0
                ? <ImageSlider key={producto._id} slides={producto.imgslide}/>
                : <img className="image_slider" src={producto.picture_url} alt={producto.altimg} />
                }
                </div>
                <div className="prod_card_detail--elemnts">
                <p className="categorias_detail">-{producto.category.map( (item) => <ItemCategory key={item} item={item} />)}</p>
                    <div className="prod_titulo_detail">{producto.title.charAt(0).toUpperCase()}{producto.title.slice(1)}</div>
                    <div><p className="description_detail">{producto.description}</p></div>
                    <ItemStockDisponible stock={producto.stock} unit_price={producto.unit_price} />
                    <ItemCount producto={producto} stock={producto.stock} quantity={quantity} agregarAlCarrito={agregarAlCarrito} terminarCompra={terminarCompra} setTerminarCompra={setTerminarCompra} setDeshacerboton={setDeshacerboton} />
                    <Link to={'/'}><div className="volveralatienda">volver a la tienda</div></Link>
                </div>
            </article>
            : 
            <div className="nosiste">
                <h1>{producto.mensaje}</h1>
                <Link to={'/'}><div className="nosiste__boton">
                    volver a la tienda
                </div></Link>
            </div> }
        </>
    )
};

export default ItemDetail;