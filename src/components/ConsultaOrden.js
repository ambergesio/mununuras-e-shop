import React, { useState, useEffect } from 'react';
import loader from "../imagenes/bear_loader.svg";
import Ticket from './Ticket';
import { checkOrderById } from '../services/apiResources';


const ConsultaOrden = ({idOrden, modal}) => {

    const [idDeLaCompra, setIdDeLaCompra] = useState();
    const [itemsComprados, setItemsComprados] = useState([]);
    const [precioTotal, setPrecioTotal] = useState();
    const [loading, setLoading] = useState();
    const [consulta, setConsulta] = useState();

    useEffect( () => {
        setLoading(true);
        checkOrderById(idOrden)
        .then((compra) => compra.json())
        .then( (compra) => { 
            const datosDeLaCompra = compra;
            const precioDeLaCompra = datosDeLaCompra.total;
            setItemsComprados([...datosDeLaCompra.items]);
            setPrecioTotal(precioDeLaCompra);
            setIdDeLaCompra(compra._id);
            setConsulta(true);
        })
        .catch((error) => {return error ;})
        .finally( () => {
            setLoading(false);
        })
    },[idOrden]);

        return (
            <>
            { loading
            ? <section><img src={loader} alt="" /></section>
            : <Ticket consulta={consulta} modal={modal} idDeLaCompra={idDeLaCompra} itemsComprados={itemsComprados} precioTotal={precioTotal} /> }
            </>
        );
}

export default ConsultaOrden;